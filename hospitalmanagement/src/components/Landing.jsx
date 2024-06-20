import { useContext, useState } from 'react';
import { MyContext } from '../Context';
import AdminPanel from './AdminPanel';
import './Landing.css';
import Login from './Login';
import MessageModal from './MessageModal';
import SignUp from './SignUp';

const Landing = () => {

    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState([]);
    const { user, setUser } = useContext(MyContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleMessageClose = () => setShowMessage(false);


    return (
        <>
            {!user && (
                <>
                    <Login handleShow={handleShow} setMessage={setMessage} setShowMessage={setShowMessage} />
                    <SignUp show={show} handleClose={handleClose} setMessage={setMessage} setShowMessage={setShowMessage} />
                    <MessageModal showMessage={showMessage} message={message} handleMessageClose={handleMessageClose} />
                </>
            )}
            {user && user.roles[0] === "ROLE_ADMIN" && (
                <AdminPanel />
            )}
            {user && user.roles[0] === "ROLE_DOCTOR" && (
                <h1>Doctor</h1>
            )}
            {user && user.roles[0] === "ROLE_PATIENT" && (
                <h1>Patient</h1>
            )}
        </>
    );
}

export default Landing;