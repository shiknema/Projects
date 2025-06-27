import React, {Component} from 'react';

class Home extends Component { //class component
    constructor(){ //initialized the component
        super()
        this.state ={ //state 
            title: 'Home Page', //props defined
        
        }
    }
    render(){
        return(
            <div className="panel-group">
                <div className="panel panel-primary">
                    <div className="panel-heading">Home Heading</div>
                    <div className="panel-body">Home Content</div>
                    <h2>{this.state.title}</h2>
                </div>
                
            </div>
        )
    }
}

export default Home;