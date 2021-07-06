import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap/'

export class UpdateModals extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateFromData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Drink Name</Form.Label>
                                <Form.Control type="email" defaultValue={this.props.strDrink} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>strDrinkThumb</Form.Label>
                                <Form.Control type="password" defaultValue={this.props.strDrinkThumb} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.props.closeModal}>close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateModals
