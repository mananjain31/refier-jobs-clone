import { Divider, IconButton, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';
import InputComponent from '../InputComponent/InputComponent';
import './Login.scss'

const Close = React.lazy(()=>import('@material-ui/icons/Close'));
const CloseIcon = ()=>(
    <React.Suspense fallback={<>...</>}>  
    <Close/>
    </React.Suspense>
)
const GoogleIcon = ()=>(
    <img
        style={{
            width:'20px',
            height:'20px',
        }}
        src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    />
)

const ContentDivider =({children})=><div>
    <div style={{display:'flex', alignItems:'center'}}>
        <Divider style={{flex:1}}/>
        <Typography style={{margin:"0 1rem", color:'gray'}}>
            {children}
        </Typography>
        <Divider style={{flex:1}}/>
    </div>
</div>

const LoginForm = (props) => {
    const [state, setState] = React.useState({
        email : '',
        password : ''
    });

    const handleSubmit=ev=>{
        ev.preventDefault();
        alert('Successfully Logged In');
        if(props.isModal)props.onClose();
        return false;
    }

    return <Paper className='login'>
        <div className='login-header'>
            <Typography>
                Login
            </Typography>
            {
            props.isModal && <IconButton onClick={props.onClose}>
                <CloseIcon/>
            </IconButton>
            }
        </div>
        <form className='login-form' noValidate={false} onSubmit={handleSubmit}>

            <Button startIcon={<GoogleIcon/>} variant='contained' className='google-button'>Sign in with Google</Button>

            <ContentDivider>OR</ContentDivider>

            <InputComponent
                label={'Email'} 
                type='email'
                required
                placeholder='Email' 
                value={state.email}
                onChange={ev=>setState(prev=>({...prev, 'email':ev.target.value}))}
            />

            <InputComponent 
                label={'Password'}    
                type='password'
                minLength={8}
                required
                placeholder='Must be at least 8 characters'
                value={state.password}
                onChange={ev=>setState(prev=>({...prev, 'password':ev.target.value}))}
            />

            <Button type='submit' className="login-button" variant='contained'>Login</Button>
            <div style={{display:'flex', alignItems:'center', gap:'0.2rem'}}>
                <Typography className='small'>New to Refier?</Typography> 
                <Typography className='small'>Register as</Typography>
                <Typography className='teal'>Student</Typography>
                <Typography className='small'> / </Typography>
                <Typography className='teal'>Enterprise</Typography>
            </div>
        </form>
    
    </Paper>
};

export default LoginForm;
