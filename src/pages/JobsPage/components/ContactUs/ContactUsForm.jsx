import React from 'react';
import {Button} from '@material-ui/core'
import InputComponent from '../../../../shared/InputComponent/InputComponent';
import './ContactUs.scss'

const ContactUsForm = () => {
    const [state, setState] = React.useState({
        fullName : '',
        email : ''
    });

    return <form className='contact-us-form'>
        <InputComponent 
            label={'Full Name'} 
            required 
            placeholder='Manan Jain' 
            value={state.fullName}
            onChange={ev=>setState(prev=>({...prev, 'fullName':ev.target.value}))}
        />
        <InputComponent 
            label={'Email'}    
            required 
            placeholder='Email'
            value={state.email}
            onChange={ev=>setState(prev=>({...prev, 'email':ev.target.value}))}
        />
        <Button className="submit-button" variant='contained'>Submit</Button>
    </form>
};

export default ContactUsForm;
