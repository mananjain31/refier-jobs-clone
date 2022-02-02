import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import ContactUs from './components/ContactUs/ContactUs';
import Filters from './components/Filters/Filters';
import JobsHeader from '../../shared/PageHeader/PageHeader';
import JobsListComponent from './components/JobsListComponent/JobsListComponent';
import './index.scss'

const JobsPage = () => {
  return <>

    <JobsHeader/>

    <main>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={12}  md={6} lg={3}>
          <Filters/> {/*filters*/}
        </Grid>
        <Grid item xs={12}  md={6}>
          <JobsListComponent/> {/*list*/}
        </Grid>

        
        <Hidden mdDown>
          <Grid item md={3} lg={3}>
            <ContactUs/> {/*contact*/}
          </Grid>
        </Hidden>
        
      </Grid>
    </main>

    <footer></footer>
  </>
};

export default JobsPage;