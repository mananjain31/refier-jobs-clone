import React from 'react';
import {
    AppBar, Grid, Toolbar, Typography, Box
} from '@material-ui/core';
import './JobsHeader.scss';
import Navigations from '../Navigations/Navigations';
 

const JobsHeader = () => {
  
  return <header>
      <AppBar color='inherit' className='app-bar' position='sticky'>
        <>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Typography 
                variant="h4"
                className='heading'
              >ReFier</Typography>
            </Grid>
            <Grid item>
              <Navigations/>
            </Grid>
          </Grid>
        </>
      </AppBar>
  </header>;
};

export default JobsHeader;
