import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../src/App.css';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import DiscreteSliderSteps from './DiscreteSliderSteps';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function BasicTable({dataArray = [{datetime: '23-03-25:03',aqi:28, co:20, no: 40}, {aqi:98, co:30, no: 10}, {aqi:78, co:23, no: 49}]}) {

  const [sliderFiltersArray, setSliderFiltersArray] = useState("")
  // const []
  
  const sliderFilters = (aqiSlider, CoSlider) => {

    let filteredByAQInCO = dataArray.filter((obj) => 
    obj.aqi > aqiSlider && obj.co > CoSlider
  )

  setSliderFiltersArray(filteredByAQInCO);
    
  }

  const [searchValue, setSearchValue] = React.useState("");
  
  // const filteredDataArray = dataArray.filter((obj) => 
  //   obj.datetime.includes(searchValue)
  // )


const rows = [];
console.log(rows, "rows")
let arrayToDisplay = dataArray;
// console.log(arrayToDisplay, "Arraytodisplay")

if (searchValue != "" && sliderFiltersArray != "") {
  console.log(sliderFiltersArray, "SliderFiltersArray")
  arrayToDisplay =  sliderFiltersArray.filter((obj) => 
  obj.datetime.includes(searchValue)
)} else if (searchValue != "" && sliderFiltersArray == "") {
  arrayToDisplay =  dataArray.filter((obj) => 
  obj.datetime.includes(searchValue))
} else if (searchValue == "" && sliderFiltersArray !== "")
{arrayToDisplay = sliderFiltersArray}


arrayToDisplay.forEach(row => {
  const {aqi, co, datetime, no2, o3, so2} = row;
  const data = {aqi, co, datetime, no2, o3, so2};
  rows.push(data);
})

let detailView;
function setDetailView (toThis) {
  detailView = toThis
}

  return (
    <div>
    {/* <p> searchVal: {searchValue}</p> */}
  
    <div style={{ height: 107, minWidth: 275, display: "flex", position: "relative", float: "right"}}>    
     
        <DiscreteSliderSteps sliderFilters = {sliderFilters}  />    
     </div>
   
    <TableContainer className='tableContainer' component={Paper}>
    <PrimarySearchAppBar setSearchValue = {setSearchValue}/>

      <Table sx={{ border: "solid 5px"}} aria-label="simple table">
        <TableHead sx={{borderBottom: "solid 5px"}} >
          <TableRow>
            <TableCell>date-time</TableCell>
            <TableCell align="right">Qir Quality Index (aqi)</TableCell>
            <TableCell align="right">Carbon Monoxide (co)</TableCell>
            {/* <TableCell align="right">so2</TableCell> */}
      
          </TableRow>
        </TableHead>
        <TableBody> 
        
          {rows.map((row) => (
            
            
            <TableRow
              // key={row.aqi}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             {setDetailView(row.datetime)}
              <Link to={`/About/${encodeURIComponent(JSON.stringify({dataArray, detailView }))}`}> <TableCell component="th" scope="row">
                {row.datetime}
              </TableCell></Link> 

              <TableCell align="right">{row.aqi}</TableCell>
              <TableCell align="right">{row.co}</TableCell>
            
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}