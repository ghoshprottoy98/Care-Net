import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import User from '../../models/User';
import AuthService from '../../services/AuthService';
import MessageModal from '../MessageModal';


const StaffRegistration = () => {
    const [signUpValidated, setSignUpValidated] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState(['', '']);
    const handleClose = () => setShowMessage(false);
    const handleMessageClose = () => setShowMessage(false);


    const service = new AuthService();

    const handleSignUpSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setSignUpValidated(true);
            return;
        }
        setSignUpValidated(false);

        var user = new User(
            form.elements.inputSignUpUserName.value,
            form.elements.inputFirstName.value,
            form.elements.inputLastName.value,
            form.elements.inputAddress.value,
            form.elements.inputPin.value,
            form.elements.inputMobileNumber.value,
            form.elements.inputSignUpEmail.value,
            form.elements.inputSignUpPassword.value,
            'doctor'
        );

        var response = await service.signUp(user);
        if (response[0] === true) {
            console.log(response[1]);
            setMessage(['Message', response[1].data.message]);
            setShowMessage(true);

            /*Re-direct to Staff dashboard or something*/
        } else {
            setMessage(['Error', response[1].response.data.message]);
            setShowMessage(true);
        }
    };
    return (
        <>
            <Container className="mt-2" data-bs-theme="dark">
                <Card className="shade">
                    <Card.Header as="h4">Staff Registration</Card.Header>
                    <Card.Body>
                        <Form noValidate validated={signUpValidated} onSubmit={handleSignUpSubmit}>
                            <Stack direction="horizontal" gap={2}>
                                <Form.Control id="inputFirstName" type="text" placeholder="First Name" required className="shade rounded-pill border-1 shadow px-4 mb-3 " />
                                <Form.Control id="inputLastName" type="text" placeholder="Last Name" required className="shade rounded-pill border-1 shadow px-4 mb-3 " />
                            </Stack>
                            <Form.Control id="inputAddress" as="textarea" placeholder="Address" required className=" shade rounded border-1 shadow px-4 mb-3 " style={{ resize: 'None', height: "100px" }} />
                            <Stack direction="horizontal" gap={2}>
                                <Form.Control id="inputPin" type="text" placeholder="PIN" required className="shade rounded-pill border-1 shadow px-4 mb-3 " />
                                <Form.Control id="inputMobileNumber" type="text" placeholder="Mobile Number" required className="shade rounded-pill border-1 shadow px-4 mb-3 " />
                            </Stack>
                            <Stack direction="horizontal" gap={2}>
                                <Form.Control id="inputSignUpUserName" type="text" placeholder="Username" required className="shade rounded-pill border-1 shadow px-4 mb-3 " />
                                <Form.Control id="inputSignUpEmail" type="email" placeholder="Email address" required className="shade rounded-pill border-1 shadow px-4 mb-3 " />
                            </Stack>
                            <Stack direction="horizontal" gap={2}>
                                <Form.Control id="inputSignUpPassword" type="password" placeholder="Password" required className="shade rounded-pill border-1 shadow px-4 mb-3  text-primary" />
                                <Form.Control id="inputSignUpConfirmPassword" type="password" placeholder="Confirm Password" required className="shade rounded-pill border-1 shadow px-4 mb-3  text-primary" />
                            </Stack>
                            <div className="text-end">
                                DevBuild: Users are registered as doctors by default.
                            </div>
                            <div className="d-flex justify-content-between">
                                <Button variant="danger" type="reset">Cancel</Button>
                                <Button variant="success" type="submit">Submit</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <MessageModal showMessage={showMessage} message={message} handleClose={handleClose} handleMessageClose={handleMessageClose} />
        </>

    );
}

export default StaffRegistration;