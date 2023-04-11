import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({handleUpdate}) {

    const handleChange = (e) => {
        // console.log(e.target.value, "ChangeVal")
        let value = e.target.value
        let par = {color: value}
        handleUpdate(par);
    }

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Choose Color</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e)}
      >
        <FormControlLabel value="green" control={<Radio />} label="Green" />
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
      </RadioGroup>
    </FormControl>
  );
}
