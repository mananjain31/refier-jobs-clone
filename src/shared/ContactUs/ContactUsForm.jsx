import React from 'react';
import PhoneInput from 'react-phone-input-2';
import Button from '../Button/Button'
import InputComponent from '../InputComponent/InputComponent';
import 'react-phone-input-2/lib/style.css'
import './ContactUs.scss'

const ContactUsForm = () => {
    const [state, setState] = React.useState({
        fullName : '',
        email : '',
        phoneNumber : '',
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

        <InputComponent label={'Mobile Number'}>
            <PhoneInput
                country={'in'}
                value={state.phoneNumber}
                onChange={phone=>setState(prev=>({...prev, phoneNumber : phone}))}
            />
        </InputComponent>

        <Button className="submit-button" variant='contained'>Submit</Button>
    </form>
};

export default ContactUsForm;
