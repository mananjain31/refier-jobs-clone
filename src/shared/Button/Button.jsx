import React from 'react';
import Button from '@material-ui/core/Button';
import './Button.scss';

export default function({className, ...props}){
    const modifiedClassName = 'btn'+(className?(' '+className):'')
    return <Button {...props} className={modifiedClassName}/>
}