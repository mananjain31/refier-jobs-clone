import React from 'react';
import { Grid, Hidden, IconButton, makeStyles } from '@material-ui/core';
import Button from '../Button/Button'
import ContactUsModal from '../ContactUs/ContactUsModal'
import LoginModal from '../Login/LoginModal'
import DrowpdownMenu from '../DropdownMenu/DropdownMenu'
import './Navigations.scss'
import DrawerComponent from '../DrawerComponent/DrawerComponent';

const MenuIcon = React.lazy(()=>import('@material-ui/icons/Menu'));
const ArrowDropDownIcon = React.lazy(()=>import('@material-ui/icons/ArrowDropDown'));


const Navigations = () => {
    const [contactUsModal, setContactUsModal] = React.useState(false);
    const [loginModal, setLoginModal] = React.useState(false);
    const [mpAnchor, setMpAnchor] = React.useState(null);
    const [drawer, setDrawer] = React.useState(false);
    const toggleDrawer= ev=> setDrawer(prev=>!prev);
    const toggleMpAnchor=(ev)=> setMpAnchor(prev=>prev===null?ev.currentTarget:null)
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
                    onClick={toggleMpAnchor}
                >Marketplace</Button>
                <DrowpdownMenu 
                    anchorEl={mpAnchor} 
                    items={['MarketPlace', 'Cohort', 'Courses', 'Webinars']} 
                    onClose={toggleMpAnchor}
                />
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
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon/>
                </IconButton>
            </Grid>
        </Hidden>
      </Grid>

    </React.Suspense>

    {/* Modals :  and drawers */}
        
        <DrawerComponent
            open={drawer}
            onClose={toggleDrawer}
            items={['MarketPlace', 'DrawerItem 2', 'DrawerItem 3']}
        />
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
