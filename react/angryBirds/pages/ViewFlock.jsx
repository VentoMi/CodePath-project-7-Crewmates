
import { useState, useEffect } from "react";
import { supabase } from "../src/client";
import MediaCard from "../src/components/MediaCard";


export default function ViewFlock() { 

   const [birds, setBirds] = useState([]); 

  
    const getBirds = async () => {

                const {data} = await supabase
                .from('angryBirds')
                .select();

                setBirds(data);
                console.log(birds, "birds")
            }

  useEffect(() => {
    getBirds();
 }, [])



    return (
    <div>
        <h1> Bird Gallery </h1>
        {/* {if (birds.length() == 0) {
            <h1></>
        }} */} <div>
        {birds.map((bird) => {
           
        return (
             <MediaCard birdData={bird}/>
             )  
        })}
         </div>
        {/* <MediaCard/> */}
    </div>
    )

}