//Implementation of functional  components with React Hooks

import React, {useState} from 'react';
import "./../weather.css";

function HooksComp(){
    const [title] = useState('Hooks Component from state')
    const [subject] = useState('React')
    const [count, setCount] = useState(0)
    //const [new State,setter function ] = useState(initial state); 
   /* setCount: Custom method that updates the state variable, registered here
      title/subject/count: current value of state variable
      useState(0) : inital state property value of count
   */

    return( //display the state data in the view
        <div>
            <div className="jumbotron">
                <h1>{title}</h1>
                <p>
                A jumbotron indicates a big box for calling extra attention to some special content or information.
                A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
                Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
                </p>
            </div>
            <div onClick={()=>{setCount(count+1)}}>Click</div>   {/* calls setCount() onclick that changes the state of count*/} 
            <h2>{count}</h2>
            <h2>{subject}</h2>
        </div>
    )
}
export default HooksComp;