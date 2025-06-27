import {React, useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
function App() { 

  const [click, setClick] = useState([0]);
  const [data, setData] = useState(0);

    useEffect(()=>{

        const callApi =async() => {
            try{
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
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
    

const handleIncrementClick = () => {
  return setClick(click + 1);
}

const handleDecrementClick = () =>{
  return setClick(click - 1);
}
  return (
    <div className="App">
      <button onClick={handleIncrementClick}>Increment</button>
      <hr />
      <button onClick={handleDecrementClick}> Decrement</button>
      <h1>{click}</h1>
      <hr/>

      <div>
        {data.map(item => (
          <>
          <p>{item.id}</p>
          <h3>{item.title}</h3>
          </>
        ))}</div>
    </div>
    
  );
}

export default App;
