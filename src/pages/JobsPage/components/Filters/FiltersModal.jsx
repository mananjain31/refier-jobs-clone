import { Box, Divider, IconButton, Modal, Paper, Typography } from '@material-ui/core';
import React from 'react';
import './Filters.scss'
import FiltersContent from './FiltersContent';

const FilterListIcon = React.lazy(()=>import('@material-ui/icons/FilterList'));
const FilterIcon = ()=>(
    <React.Suspense fallback={<>...</>}>  
      <FilterListIcon/>
    </React.Suspense>
  )

const Close = React.lazy(()=>import('@material-ui/icons/Close'));
const CloseIcon = ()=>(
    <React.Suspense fallback={<>...</>}>  
    <Close/>
    </React.Suspense>
)

const FiltersModal = (props) => {
  return  <Modal {...props}>
        <Box className='filters-modal'>
            <Paper className="filters">
                <div className='filters-modal-header'>
                    <Typography>Filters</Typography> <IconButton onClick={props.onClose}><CloseIcon/></IconButton>
                </div>
                <Divider/>
                <FiltersContent/>  
            </Paper>
        </Box>
    </Modal>
};

export default FiltersModal;
