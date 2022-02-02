import { Switch, Typography } from '@material-ui/core';
import React from 'react';
import './Switcher.scss'

const Switcher = ({label, ...rest}) => {
  return <div className='switch-container'>
      <Typography>{label}</Typography>
      <Switch color='primary' {...rest}/>
  </div>;
};

export default Switcher;
