import React from 'react';
import { Button, Grid, Hidden, makeStyles } from '@material-ui/core';
// import styles from './NavigationsStyles'

const MenuIcon = React.lazy(()=>import('@material-ui/icons/Menu'));
const ArrowDropDownIcon = React.lazy(()=>import('@material-ui/icons/ArrowDropDown'));


const Navigations = () => {

  return <>
    <React.Suspense fallback={<></>}>
      <Grid container spacing={5} alignItems='center'>
        <Hidden smDown>
            <Grid item>
                <Button>Contact Us</Button>
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
                variant='outlined'
            >Login</Button>
        </Grid>

        <Grid item>
            <Button 
                // className={classes.regBtn}
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
  </>;
};

export default Navigations;
