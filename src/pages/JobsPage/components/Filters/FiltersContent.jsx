import React from 'react';
import MultiSelect from '../../../../shared/MultiSelect/MultiSelect';   
import Switcher from '../../../../shared/Switcher/Switcher';
import { Slider, Typography } from '@material-ui/core';


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const FiltersContent = () => {
    const [sliderVal, setSliderVal] = React.useState(5);

    return <>
        <MultiSelect label='Category' options={options} placeholder='eg - Sales, Marketing'/>
        <MultiSelect label='Location' options={options} placeholder='eg - Delhi, Mumbai'/>
        <Switcher label='Work From Home'/>
        <Switcher label='Only Internships'/>

        <div className='slider-label'>
            <Typography>Desired Minimum Monthly Pay</Typography>
            <Typography>{sliderVal}L</Typography>
        </div>
        <Slider value={sliderVal} onChange={(ev, newVal)=>setSliderVal(newVal)} max={10} min={1} step={0.5}/>
    </>;
};

export default FiltersContent;
