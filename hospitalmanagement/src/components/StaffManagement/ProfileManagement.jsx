import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { MyContext } from '../../context';
import AuthService from '../../services/AuthService';
import MessageModal from '../MessageModal';

const ProfileManagement = () => {
    const [searchValidated, setSearchValidated] = useState(false);
    const { user, setUser } = useContext(MyContext);
    const [message, setMessage] = useState(['', '']);
    const [showMessage, setShowMessage] = useState(false);

    const [searchUser, setSearchUser] = useState(null);

    const service = new AuthService();
    const handleClose = () => setShowMessage(false);

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setSearchValidated(true);
            return;
        }
        setSearchValidated(false);

        var userName = form.elements.inputSearchUserName.value;
        var response = await service.searchDoctor(user, userName);
        if (response[0] === true) {
            setSearchUser(response[1].data);
            console.log(response[1].data)
        } else {
            setMessage(['Error', response[1].response.data.message]);
            setShowMessage(true);
        }
    };
    return (
        <>
            <Container className="m-0 p-0" data-bs-theme="dark">
                <Navbar className="bg-body-tertiary justify-content-between px-3 mt-0">
                    <Form noValidate validated={searchValidated} onSubmit={handleSearchSubmit}>
                        <Row>
                            <Col xs="auto">
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <Form.Control
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        id="inputSearchUserName"
                                        type="text"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" variant="success">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar>
                {searchUser !== null && (
                    <Card className="m-2">
                        <Card.Header as="h4" className="bg-dark text-white">Doctor Profile</Card.Header>
                        <Card.Body>
                            <Table striped="columns" bordered>
                                <thead>
                                    <tr>
                                        <th>UserName</th>
                                        <td>@{searchUser.username}</td>
                                        <th>ID</th>
                                        <td>{searchUser.id}</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>First Name</th>
                                        <td>{searchUser.firstName}</td>
                                        <th>Address</th>
                                        <td>{searchUser.address}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name</th>
                                        <td>{searchUser.lastName}</td>
                                        <th>Pin</th>
                                        <td>{searchUser.pin}</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile Number</th>
                                        <td>{searchUser.mobileNumber}</td>
                                        <th>Email</th>
                                        <td>{searchUser.email}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                )}
            </Container>
            <MessageModal message={message} showMessage={showMessage} setShowMessage={setShowMessage} handleMessageClose={handleClose} />
        </>
    );
}

export default ProfileManagement;