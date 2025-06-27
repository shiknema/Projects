//implementation using class components without React Hooks

import React, {Component} from 'react';

class WithOutHooksComp extends Component {  //custom class component
    constructor(props){ 
        super(props)

        this.state={   //state
            title:"WithOut Hooks"  //props
        }
    }
    render(){
        return(
            <div>
                <div className="jumbotron">
                    <h1>{this.state.title}</h1>    {/* Display the state in the view */}
                    <p>
                    A jumbotron indicates a big box for calling extra attention to some special content or information.
                    A jumbotron is displayed as a grey box with rounded corners. It also enlarges the font sizes of the text inside it.
                    Tip: Inside a jumbotron you can put nearly any valid HTML, including other Bootstrap elements/classes.
                    </p>
                </div>
            </div>
        )
    }
}
    
export default WithOutHooksComp;