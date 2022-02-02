import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Select from 'react-select';

const useStyles = makeStyles(()=>({
    label : {
        fontWeight: 600,
        fontSize : 'smaller',
    }
}));

const MultiSelect = ({label,...rest}) => {
    const classes = useStyles();
    return <div className='multi-select'>
        <Typography className={classes.label}>{label}</Typography>
        <Select
            isMulti
            {...rest}
        />
    </div>
};

export default MultiSelect;
