import { Box, Grid } from '@material-ui/core';
import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Filters from '../../components/Filters/Filters';
import JobsHeader from '../../components/JobsHeader/JobsHeader';
import JobsListComponent from '../../components/JobsListComponent/JobsListComponent';
import './JobsPage.scss'

const JobsPage = () => {
  return <>
    <JobsHeader/>
    <main>
      <Grid container justifyContent='center' spacing={3}>
        <Grid item md={2}>
          <Filters/> {/*filters*/}
        </Grid>
        <Grid item md={6}>
          <JobsListComponent/> {/*list*/}
        </Grid>
        <Grid item md={2}>
          <ContactUs/> {/*contact*/}
        </Grid>
      </Grid>
    </main>
    <footer></footer>
  </>
};

export default JobsPage;