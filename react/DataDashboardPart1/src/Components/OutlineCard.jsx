import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function OutlinedCard({dataArray, location, timezone}) {
    let aqiArray = [];
    let aqiSum = 0;
    let coSum = 0;
    let coArray = [];
    

    const stats = dataArray.map((currentVal) => {
      aqiArray.push(currentVal.aqi);
      aqiSum+=currentVal.aqi;
      coSum+=currentVal.co;
      coArray.push(currentVal.co)
    });

    console.log(aqiArray, "aqiArray");
    console.log(coArray);
    console.log(aqiSum);
    console.log(coSum);
    
    let meanAQI = aqiSum / aqiArray.length;
    let meanCo = coSum / coArray.length;
    let maxAQI = Math.max(...aqiArray);
    let maxCo = Math.max(...coArray);
    let minAQI = Math.min(...aqiArray);
    let minCo = Math.min(...coArray);
    let aqiRange = maxAQI - minAQI;
    let coRange = maxCo - minCo;

    console.log(meanAQI," ", meanCo, " ", maxCo, " ", minAQI," ", minCo)

const card1 = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {location}
      </Typography>
      <Typography variant="body2">
        {timezone}
      </Typography>
    </CardContent>
  </React.Fragment>
);

const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          AQI Summary Statistics
        </Typography>
        <Typography variant="body2">
          Average AQI: {meanAQI}
          <br />
          Max and Min AQI: {maxAQI} <span/>,<span/> {minAQI}
          <br />
          Range: {Math.round(aqiRange * 100)/100 }
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Co Summary Statistics
        </Typography>
        <Typography variant="body2">
          Average Co: {meanCo}
          <br />
          Max and Min Co: {maxCo} <span/>,<span/> {minCo}
          <br />
          Range: {Math.round(coRange * 100)/100 }
        </Typography>
      </CardContent>
    </React.Fragment>
  );




  return (
   <div style={{ position: "relative",
   
   transform: "translate (-50%, -50%)"}}>
    <Box sx={{  display: "flex" }} justifyContent="center">
    <Box sx={{ width: 275, display: "flex"}}>
     <Card variant="outlined">{card1}</Card>
   </Box>
    <Box sx={{ width: 275 ,display: "flex" }}>
    <Card variant="outlined">{card2}</Card>
   </Box>
   <Box sx={{ width: 275,  }}>
     <Card sx={{ width: 275, display: "flex"}} variant="outlined">{card3}</Card>
   </Box>
    </Box>

   </div>
  );
}