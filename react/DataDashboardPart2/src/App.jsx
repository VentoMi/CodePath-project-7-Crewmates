import { useState, useEffect } from 'react'
import './App.css'
import BasicTable from '../routes/BasicTable';
import OutlinedCard from '../routes/OutlineCard';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.WEATHER_API_KEY;
// console.log(API_KEY);

const url = `https://api.weatherbit.io/v2.0/history/airquality?city=Williamstown,MA&key=d9ae6fc8da824a63a428a30ecf78d10d`

function App() { 

  const [data, setData] = useState([])
  const [timezone, setTimezone] = useState("")
  const [location, setLocation] = useState("")



useEffect(() => {

  const fetchData = async () => {
  const response = await fetch(url);
  const json_response = await response.json();
  console.log(json_response, "All data");
  setData(json_response.data)
  setTimezone(json_response.timezone)
  setLocation(json_response.city_name + ", " + json_response.country_code)
}

  fetchData().catch(console.error);

}, [])
  const encodedData = encodeURIComponent(JSON.stringify({data}));

  return (
    <div className='mainContainer'>
 
  <h1 className='mainHeading'> Williamstown Current Air Quality </h1>
  
    <OutlinedCard dataArray={data} location = {location} timezone = {timezone}/>
    <BasicTable dataArray={data}/>
   
   
    </div>
   
  )

}

export default App
