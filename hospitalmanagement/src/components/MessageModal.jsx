import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MessageModal = (props) => {

    return (
        <Modal
            size="sm"
            show={props.showMessage}
            onHide={props.handleMessageClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.message[0]}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.message[1]}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleMessageClose}>Okay</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MessageModal;