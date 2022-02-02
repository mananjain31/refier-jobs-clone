import { Hidden, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './Filters.scss';
import FiltersContent from './FiltersContent';

const FilterListIcon = React.lazy(()=>import('@material-ui/icons/FilterList'));

const FilterIcon = ()=>(
  <React.Suspense fallback={<>...</>}>  
    <FilterListIcon/>
  </React.Suspense>
)

const Filters = () => {
  return <Paper className="filters">

    <div className='filters-header'>
      <FilterIcon/> <Typography>Filters</Typography>
    </div>


    <Hidden only={['sm','xs']}>
      <FiltersContent/>  
    </Hidden>

  </Paper>;
};

export default Filters;
