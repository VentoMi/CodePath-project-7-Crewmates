import { useParams } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar } from 'recharts'
import { useState } from "react";
import BasicMenu from "./BasicMenu";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import PieChartComp from "./pieChartComp";

const About = () => {

   const {id } = useParams();
   const decodedString = decodeURIComponent(id);
   const data = JSON.parse(decodedString);
   console.log(data, "data"); 

   // limit array to just required data
   let date = data.detailView.slice(0, 10)
   console.log(date)

    const dateTimeSpecific = data.dataArray.filter((obj) => 
    obj.datetime.includes(data.detailView))
    console.log(dateTimeSpecific)

    // console.log(dateTimeSpecific[0])
    // const timeSpecificArray = []
    // for (const [key, value] of Object.entries(dateTimeSpecific[0])) {
    //     // let obj = {`${key}:${value}`}
    //     let obj
    //     console.log(key)
    //     obj = {key:value}
    //     // timeSpecificArray.push(`${key}:${value}`)
    //     timeSpecificArray.push(obj)
        
    // }
  

    const toObjects = () => { 
        const {aqi, co, no2, o3, so2} = dateTimeSpecific[0];
        return [{name: "aqi",value: aqi}, {name: "co", value : co}, {name: "no2", value : no2}, {name: "o3", value : o3}, {name: "so2", "value" : so2}]}

    const timeSpecificArray = toObjects();

   const dateData = data.dataArray.filter((obj) => 
   obj.datetime.includes(date))
//    console.log(dateData, "dateData")

    // graph user-selectable 
 const [compound, setcompound] = useState("aqi")
 const [compoundBarG, setcompoundBarG] = useState("aqi")

    const renderLineChart = (
    <LineChart style={{margin:"auto"}} width={600} height={300} data={dateData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={compound} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="datetime" />
        <YAxis/>
        <Tooltip />
    </LineChart>
    );

    // const renderBarChart = (
    //     <BarChart width={600} height={300} data={dateData}>
    //       <XAxis dataKey="datetime" />
    //       <YAxis />
    //       <Bar dataKey={compoundBarG} barSize={30} fill="#8884d8" label="test"/>
    //     </BarChart>
    //   );

    // const renderPieChart = (
    //     <ResponsiveContainer width="100%" height="100%">
    //     <PieChart width={400} height={400}>
    //       <Pie
    //         data={timeSpecificArray}
    //         cx="50%"
    //         cy="50%"
    //         labelLine={false}
    //         label={renderCustomizedLabel}
    //         outerRadius={80}
    //         fill="#8884d8"
    //         dataKey="value"
    //       >
    //         {timeSpecificArray.map((entry, index) => (
    //           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //         ))}
    //       </Pie>
    //     </PieChart>
    //   </ResponsiveContainer>
    // )
    // [compound, selectCompound] = useState()
   

    return (
        <div >
        
        <h1 style={{justify:"center"}}> {date} hourly {compound} values</h1>
        
      
    
             
      
        <div style={{margin:"auto"}} >
                <BasicMenu  setcompound={setcompound}/>
        </div> 

           {renderLineChart}
        
        <br/>
        <h1> Air Quality Summary for {date}  </h1>
        <div style={{margin:"auto"}}>
              <PieChartComp data={timeSpecificArray}/>
        </div>
    
       
         
          </div>
    );
}

export default About