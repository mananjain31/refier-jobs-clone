import React from 'react';
import JobCardComponent from '../JobCardComponent/JobCardComponent';
import './JobListComponent.scss'

const JobsListComponent = () => {
  const [jobs, setJobs] = React.useState([1,2,3,4]);
  return <section className='job-list'>
    {
      jobs.map(job => 
        <JobCardComponent key={job}/>
      )
    }
  </section>;
};

export default JobsListComponent;