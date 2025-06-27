//Implementation of functional  components with React Hooks

import React, {useState} from 'react';
import './style.css';

function LearnUseState(){
    
    const [steps, setStep] = useState(()=>{
        console.log("clicked");
        return 0;
    });
   
    const [howIsDay, setHowIsDay] = useState(false);

  const handleClick = () => {
    setHowIsDay(!howIsDay);
    console.log(howIsDay);
  };

  const renderImageName = (image, howIsDay) => {
    return <p className={!howIsDay ? 'happy' : 'sad'}>{image}</p>;
  }
  
    function Increment (){
        console.log("Incremented by 1");
        return setStep(steps+1);
        
    }
    
    return( //display the state data in the view
        <div>
            <div className="jumbotron">
            <button type = "button" className = "btn btn-primary" onClick={Increment}>Increment</button>   {/* calls setCount() onclick that changes the state of count*/} 
            <button type = "button" className = 'btn btn-danger' onClick={()=>{setStep(steps-1)}}> Decrement</button>
            <h2>{steps}</h2>

            <hr/>
            <h2> How are you today?</h2>
            {renderImageName(!howIsDay ? 'happy' : 'sad',howIsDay)} 
            <button className = "btn btn-primary" onClick={handleClick}>Change</button>           
            </div> 
            </div>
    )
}
export default LearnUseState;