import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Preview } from '@mui/icons-material';

export default function BasicTextFields({handleUpdate}) {

    const handleChange = (e) => {

        let key = e.target.id

        let val = e.target.value
   
        let newValue ={[key]:val}
        handleUpdate(newValue)
    }

  return (
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="name" label="Name" variant="filled" onChange={(e) => handleChange(e)}/>
      <TextField id="type" label="Bird Type" variant="filled" onChange={(e) => handleChange(e)}/>
      <TextField id="size" label="Size(kg)" variant="filled" onChange={(e) => handleChange(e)}/>
      {/* <TextField id="color" label="Color" variant="filled" onChange={(e) => handleChange(e)}/> */}

    </Box> 
    <br></br>
    </div>
  );
 
}
