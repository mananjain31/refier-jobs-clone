import React from 'react';
import { Grid, Hidden, makeStyles } from '@material-ui/core';
import Button from '../Button/Button'
import ContactUsModal from '../ContactUs/ContactUsModal'
import LoginModal from '../Login/LoginModal'
import './Navigations.scss'

const MenuIcon = React.lazy(()=>import('@material-ui/icons/Menu'));
const ArrowDropDownIcon = React.lazy(()=>import('@material-ui/icons/ArrowDropDown'));


const Navigations = () => {
    const [contactUsModal, setContactUsModal] = React.useState(false);
    const [loginModal, setLoginModal] = React.useState(false);
    const toggleContactUsModal=()=>setContactUsModal(prev=>!prev);
    const toggleLoginModal=()=>setLoginModal(prev=>!prev);
  return <>
    <React.Suspense fallback={<></>}>
      <Grid container spacing={5} alignItems='center' className='navigations'>
        <Hidden smDown>
            <Grid item>
                <Button
                    onClick={toggleContactUsModal}
                >Contact Us</Button>
            </Grid>
            <Grid item>
                <Button
                    endIcon={<ArrowDropDownIcon/>}
                >Marketplace</Button>
            </Grid>
            <Grid item>
                <Button
                >Jobs</Button>
            </Grid>
        </Hidden>

        <Grid item>
            <Button
                // className={classes.btn}
                onClick={toggleLoginModal}
                variant='outlined'
            >Login</Button>
        </Grid>

        <Grid item>
            <Button 
                // className={classes.regBtn}
                onClick={toggleLoginModal}
                variant='contained'
                color='primary'
                style={{background : 'black'}}
                endIcon={<ArrowDropDownIcon/>}
            >Register</Button>
        </Grid>

        <Hidden mdUp>
            <Grid item>
                <MenuIcon/>
            </Grid>
        </Hidden>
      </Grid>

    </React.Suspense>

    {/* Modals :  */}
        <ContactUsModal
            open={contactUsModal}
            onClose={toggleContactUsModal}
        />

        <LoginModal 
            open={loginModal}
            onClose={toggleLoginModal}
        />
    {/* Modals ends */}
  </>;
};

export default Navigations;
