import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


function DeleteButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='btn btn-sm' onClick={handleShow} style={{
                backgroundColor: "red",
                textDecoration: "none",
                border: "none",
                padding: "6px 43px"
            }}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        yes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// render(<Example />);
export default DeleteButton