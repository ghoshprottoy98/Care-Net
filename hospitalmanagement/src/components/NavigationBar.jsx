import { useContext } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import secureLocalStorage from 'react-secure-storage';
import { MyContext } from '../Context';
import Authservice from '../services/AuthService';

const NavigationBar = () => {

    const { user, setUser } = useContext(MyContext);
    const service = new Authservice();

    const account = () => {
        console.log("account");
    }

    const logout = () => {
        console.log("logout");
        setUser(null);
        secureLocalStorage.clear();

    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary main-navigate-border" data-bs-theme="dark" sticky="top">
            <div className="d-flex justify-content-between align-items-center w-100 mx-3">
                <Navbar.Brand className="fs-4">Hospital Management</Navbar.Brand>
                {user && (
                    <NavDropdown title={user.user.firstName + ' ' + user.user.lastName} id="userDropDown" className="text-light">
                        <NavDropdown.Item onClick={account}>Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>
                            Log Out
                        </NavDropdown.Item>
                    </NavDropdown>
                )}
            </div>
        </Navbar>
    );
}

export default NavigationBar;