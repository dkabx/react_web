import React, { Component } from 'react';
import { Button, Modal} from 'react-materialize';
import Login from '../../../containers/Login/Login';

class SigninModal extends Component {

    render() {
        return (
            <Modal
                trigger={
                    <Button waves='light'>SIGNIN</Button>
                }>
                <Login />
            </Modal>
    );
    }
}

export default SigninModal;
