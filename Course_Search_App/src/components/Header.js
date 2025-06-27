import React, {Component, Fragment } from "react";
import './../style.css'

class Header extends Component{
    constructor(){
        super()
        this.state={
            title : 'Learning Platform', 
            userInput: "Enter Here"
        }
    }
 
    handleChange = (event) =>{
        this.setState({userInput : event.target.value})
        this.props.userText(event.target.value) // take usertext from Home component as a props & bind here with event

    }

    render(){
        return (
            <Fragment>
                <div className='container'>
                    <div className ='heading'>
                        <h1>{this.state.title} </h1>
                        <input onChange = {this.handleChange} placeholder="Search..."></input>
                        <h4>{this.state.userInput}</h4>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Header;
