import { Box, Modal } from '@material-ui/core';
import React from 'react';
import ContactUs from './ContactUs';
import './ContactUs.scss'

const ContactUsModal = (props) => {
  return <Modal open={props.open} onClose={props.onClose}>
        <Box className='contact-us-modal'>
          <ContactUs isModal onClose={props.onClose}/>
        </Box>
    </Modal>
};

export default ContactUsModal;
