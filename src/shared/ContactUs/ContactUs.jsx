import { Divider, IconButton, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './ContactUs.scss'
import ContactUsForm from './ContactUsForm';

const Close = React.lazy(()=>import('@material-ui/icons/Close'));
const CloseIcon = ()=>(
    <React.Suspense fallback={<>...</>}>  
    <Close/>
    </React.Suspense>
)


const ContactUs = (props) => {
  return <Paper className='contact-us'>

      <div className='contact-us-header'>
        <Typography>
          Confused?<br/>
          We can help you
        </Typography>
        {
          props.isModal && <IconButton onClick={props.onClose}>
            <CloseIcon/>
          </IconButton>
        }
      </div>

      <Divider/>

      <ContactUsForm/>

  </Paper>;
};

export default ContactUs;
