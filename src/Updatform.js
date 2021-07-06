import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export class Updatform extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Form  onSubmit={(e)=>{this.props.updateData(e)}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name={'name'} defaultValue={this.props.name}/>
                                <Form.Label>Url</Form.Label>
                                <Form.Control type="text" name={'url'} defaultValue={this.props.url} />
                            </Form.Group>

                         
                           
                            <Button variant="primary" type="submit" onClick={this.props.closeModal}>
                                Submit
                            </Button>
                        </Form>

                    </Modal.Body>

                </Modal>
            </div>
        )
    }
}

export default Updatform
