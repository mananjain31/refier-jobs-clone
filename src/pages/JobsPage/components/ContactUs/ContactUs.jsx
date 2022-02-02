import { Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './ContactUs.scss'
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  return <Paper className='contact-us'>

      <div className='contact-us-header'>
        <Typography>
          Confused?<br/>
          We can help you
        </Typography>
      </div>

      <Divider/>

      <ContactUsForm/>

  </Paper>;
};

export default ContactUs;
