import { Typography } from '@material-ui/core';
import React from 'react';
import'./InputComponent.scss';

const InputComponent = ({label, required, ...rest }) => {
  return <div className='input-component'>
      <Typography>{label}{required && <span style={{color:'red'}}>*</span>}</Typography>
      <input {...rest}/>
  </div>
};

export default InputComponent;
