import React, { useState,useEffect } from "react";

import axios from "axios";

const CallingRestAPI = () =>{

    const [data, setData] = useState(0);

    useEffect(()=>{

        const callApi =async() => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
                console.log(response.data);
                
                setData(response.data);

            }catch(error){
                console.log("Error");
            }finally{
                console.log("success");  
            }

        };
        callApi();
    },[]);
    
    
    return(
    <>
    <h2>{data.title}</h2></> 
    )
}
export default CallingRestAPI();