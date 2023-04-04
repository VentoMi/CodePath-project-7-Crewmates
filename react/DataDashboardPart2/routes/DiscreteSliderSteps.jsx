import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

const marksAQI = [
  {
    value: 250,
    label: 'aqi',
  }
];

const marksCO = [
  {
    value: 250,
    label: 'CO',
  }
];

function valuetext(value) {
  return `${value}°C`;
}



export default function DiscreteSliderSteps({sliderFilters}) {
  const [aqiSliderVal, setAqiSliderVal] = React.useState("d");
  const [coSliderVal, setCoSliderVal] = React.useState("d");
  
  const sliderFiltersCallback = () => {
    sliderFilters(aqiSliderVal, coSliderVal)
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={250}
        getAriaValueText={valuetext}
        step={2}
        marks = {marksAQI}
        min={0}
        max={500}
        valueLabelDisplay="auto"
        onChange={(e) => setAqiSliderVal(e.target.value)}
      />

       <Slider
        aria-label="Small steps"
        defaultValue={250}
        getAriaValueText={valuetext}
        step={2}
        marks = {marksCO}
        min={0}
        max={500}
        valueLabelDisplay="auto"
        onChange={(e) => setCoSliderVal(e.target.value)}
      />
      <Button variant="contained" onClick={sliderFiltersCallback}>Filter</Button>

    </Box>
  );
}
