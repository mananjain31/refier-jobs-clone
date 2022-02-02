import { Avatar, Box, Button, Card, CardActions, Chip, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './JobCardComponent.scss'

const LocationOnIcon = React.lazy(()=> import('@material-ui/icons/LocationOn'))
const WorkIcon = React.lazy(()=> import('@material-ui/icons/Work'))

const JobCardComponent = () => {
  const job = {
    title : "Business Development Executive (Only for Female Candidates)",
    company : "Easeassist",
    location : "Remote",
    expReq : 2,
    tags : ['INOFFICE', 'Full-Time']
  }
  return <Card className='card'>
    
    <Box className='job-header'>
      <div className='heading'>
        <Typography>
          {job.title}
        </Typography>
        <div className='sub-heading'>
          <Typography>
            {job.company}    
          </Typography>
        </div>
      </div>
      <Avatar src='https://i.pinimg.com/originals/ac/cc/09/accc0910c1a0b81fcfa28cf8c46c40c2.png' className='avatar'/>
    </Box>
    
    <Divider/>
    
    <Box className='icon-info'>
      <React.Suspense fallback={<></>}>
        <Grid container>
          <Grid item sx={6} md={3}>
              <div className="icon-text">
                <LocationOnIcon/> <Typography>{job.location}</Typography>
              </div>
          </Grid>
          <Grid item sx={6} md={4}>
              <div className="icon-text">
                <WorkIcon/>  <Typography>{job.expReq}+ Years of experience</Typography>
              </div>
          </Grid>
        </Grid>
      </React.Suspense>
    </Box>

    <Box className='card-content'>
      Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate Female Business
      Development Professionals who would l...
    </Box>

    <Box className='card-actions'>
      {
        job?.tags?.slice(0,2).map((tag)=><Chip key={tag} label={
          <Typography>
            {tag}
          </Typography>
        }/>)
      }
      <Button className='apply-btn' variant='contained'>
        Apply Now
      </Button>
    </Box>

  </Card>;
};

export default JobCardComponent;
