import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu({setcompound}) {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (element) => {
    setAnchorEl(null);
    setcompound(element)
  };

  return (
    <div style={{textAlign:"center"}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Choose Air Component
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose("aqi")}>AQI</MenuItem>
        <MenuItem onClick={() => handleClose("co")}>CO</MenuItem>
        <MenuItem onClick={() => handleClose("no2")}>NO2</MenuItem>
        <MenuItem onClick={() => handleClose("so2")}>SO2</MenuItem>
        <MenuItem onClick={() => handleClose("o3")}>O3</MenuItem>


      </Menu>
    </div>
  );
}
