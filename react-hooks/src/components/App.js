
import React, {Component} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import LearnUseState from './LearnUseState';

class App extends Component{ //custom className component
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span> 
                            </button>
                          
                            </div>
                            <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">useState</Link></li>
                                <li><Link to="/">useEffect</Link></li>
                                
                           </ul>
                            </div>
                        </div>
                    </nav>
                    </header>
                   <Route exact path="/" component={LearnUseState}></Route>
                  
                     {/**  <Route path="/withouthooks" component={WithOutHooksComp}></Route>
                    <Route path="/hooks" component={HooksComp}></Route>
                    <Route path="/weather" component={WeatherHooks}></Route>
                    */} 
                    
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

