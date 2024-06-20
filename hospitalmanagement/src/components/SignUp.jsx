import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import User from 'src/models/user'
import AuthService from '../services/AuthService';

const SignUp = (props) => {

    const [signUpValidated, setSignUpValidated] = useState(false);

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
            'patient'
        );

        var response = await service.signUp(user);
        if (response[0] === true) {
            console.log(response[1]);
            props.setMessage(['Message', response[1].data.message]);
            props.setShowMessage(true);
            props.handleClose();
        } else {
            props.setMessage(['Error', response[1].response.data.message]);
            props.setShowMessage(true);
        }
    };

    return (
        <Modal
            size="lg"
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Form noValidate validated={signUpValidated} onSubmit={handleSignUpSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack direction="horizontal" gap={2}>
                        <Form.Control id="inputFirstName" type="text" placeholder="First Name" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        <Form.Control id="inputLastName" type="text" placeholder="Last Name" required className="rounded-pill border-2 shadow px-4 mb-3" />
                    </Stack>
                    <Form.Control id="inputAddress" as="textarea" placeholder="Address" required className="rounded border-2 shadow px-4 mb-3" style={{ resize: 'None' }} />
                    <Stack direction="horizontal" gap={2}>
                        <Form.Control id="inputPin" type="text" placeholder="PIN" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        <Form.Control id="inputMobileNumber" type="text" placeholder="Mobile Number" required className="rounded-pill border-2 shadow px-4 mb-3" />
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                        <Form.Control id="inputSignUpUserName" type="text" placeholder="Username" required className="rounded-pill border-2 shadow px-4 mb-3" />
                        <Form.Control id="inputSignUpEmail" type="email" placeholder="Email address" required className="rounded-pill border-2 shadow px-4 mb-3" />
                    </Stack>
                    <Form.Control id="inputSignUpPassword" type="password" placeholder="Password" required className="rounded-pill border-2 shadow px-4 mb-3 text-primary" />
                    <Form.Control id="inputSignUpConfirmPassword" type="password" placeholder="Confirm Password" required className="rounded-pill border-2 shadow px-4 mb-3 text-primary" />
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default SignUp;