import React, { Component } from 'react';
import { Button, Modal} from 'react-materialize';
import Register from '../../../containers/Register/Register';

class SignupModal extends Component {

    render() {
        return (
            <Modal
                trigger={
                    <Button waves='light'>Register</Button>
                }>
                <Register />
            </Modal>
        );
    }
}

export default SignupModal;
