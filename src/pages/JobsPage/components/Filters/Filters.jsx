import { Hidden, Modal, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './Filters.scss';
import FiltersContent from './FiltersContent';
import FiltersModal from './FiltersModal';

const FilterListIcon = React.lazy(()=>import('@material-ui/icons/FilterList'));

const FilterIcon = ()=>(
  <React.Suspense fallback={<>...</>}>  
    <FilterListIcon/>
  </React.Suspense>
)

const Filters = () => {

  const [modal, setModal] = React.useState(false);

  const toggleModal = () => setModal(prev=>!prev);

  return <Paper className="filters">
    
    <Hidden only={['sm','xs']}>
      <div className='filters-header'>
        <FilterIcon/> <Typography>Filters</Typography>
      </div>
      <FiltersContent/>  
    </Hidden>

    <Hidden only={['md','lg','xl']}>

      <div className='filters-header'  onClick={toggleModal}>
        <FilterIcon/> <Typography>Filters</Typography>
      </div>

      <FiltersModal
        open={modal}
        onClose={toggleModal}
      />
    </Hidden>


  </Paper>;
};

export default Filters;
