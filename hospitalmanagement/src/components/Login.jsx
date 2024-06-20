import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import './Login.css';
import AuthService from '../services/AuthService';
import { MyContext } from '../Context';
import secureLocalStorage from 'react-secure-storage'

const Login = (props) => {

    useEffect(() => {
        console.log(secureLocalStorage.getItem("rememberMe"));
        const login = async (username, password) => {
            var response = await service.login(username, password);
            if (response[0] === true) {
                console.log(response[1]);
                setUser(response[1].data);
            }
        }
        if (secureLocalStorage.getItem("rememberMe") === true) {
            login(secureLocalStorage.getItem("username"), secureLocalStorage.getItem('password'));
        }
    }, []);

    const [loginValidated, setLoginValidated] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const { user, setUser } = useContext(MyContext);

    const service = new AuthService();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setLoginValidated(true);
            return;
        }
        setLoginValidated(false);

        const username = form.elements.inputLoginUserName.value;
        const password = form.elements.inputLoginPassword.value;

        var response = await service.login(username, password);
        if (response[0] === true) {
            console.log(response[1]);
            setUser(response[1].data);
            if (rememberMe === true) {
                console.log("storing");
                secureLocalStorage.setItem("rememberMe", rememberMe);
                secureLocalStorage.setItem("username", username);
                secureLocalStorage.setItem("password", password);
            }
            else {
                secureLocalStorage.clear();
            }

        }
        else {
            props.setMessage(['Error', response[1].response.data.message]);
            props.setShowMessage(true);
        }

    };

    return (
        <Container fluid>
            <Row className="no-gutter">
                <Container className="col-md-6 d-none d-md-flex bg-image"></Container>
                <Container className="col-md-6 bg-light">
                    <Container className="login d-flex align-items-center py-5">
                        <Container>
                            <Row>
                                <Container className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4 text-center">Login Page</h3>
                                    <p className="text-muted mb-4 text-center">Login to hospital management application</p>
                                    <Form noValidate validated={loginValidated} onSubmit={handleLoginSubmit}>
                                        <Form.Control id="inputLoginUserName" type="text" placeholder="Username" required className="rounded-pill border-2 shadow-sm px-4 mb-3" />
                                        <Form.Control id="inputLoginPassword" type="password" placeholder="Password" required className="rounded-pill border-2 shadow-sm px-4 mb-3 text-primary" />
                                        <Form.Check id="customCheck1" type="switch" label="Remember Password" defaultChecked onChange={() => setRememberMe(!rememberMe)} />
                                        <Button type="submit" className="w-100 mt-2 btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</Button>
                                        <Stack direction="horizontal" gap={1} className="d-flex justify-content-center"><div className="p-4">Don't have an account?</div><Button variant="outline-danger" onClick={props.handleShow}>Create Account</Button></Stack>
                                    </Form>
                                </Container>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </Row>
        </Container>
    );
}

export default Login;