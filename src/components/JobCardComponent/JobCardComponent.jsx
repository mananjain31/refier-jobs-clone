import { Avatar, Box, Card, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import './JobCardComponent.scss'
const JobCardComponent = () => {
  const job = {
    title : "Business Development Executive (Only for Female Candidates)",
  }
  return <Card>
    <Box className='job-header'>
      {job.title} <Avatar>A</Avatar>
    </Box>
  </Card>;
};

export default JobCardComponent;
