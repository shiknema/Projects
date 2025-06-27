import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Products from './products';
import Home from './home';
import productDetails from './productDetails';


class Routing extends Component{ //class component for Routing
    render(){
        return(
            <BrowserRouter>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" 
                            data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                        </button>
                    
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Products</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/product" component={Products}></Route>
                    <Route exact path="/product/:productId" component={productDetails}/>
                 
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;