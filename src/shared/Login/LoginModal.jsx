import { Box, Modal } from '@material-ui/core';
import React from 'react';
import './Login.scss'
import LoginForm from './LoginForm';

const LoginModal = (props) => {
  return <Modal open={props.open} onClose={props.onClose}>
        <Box className='login-modal'>
          <LoginForm isModal onClose={props.onClose}/>
        </Box>
    </Modal>
};

export default LoginModal;
