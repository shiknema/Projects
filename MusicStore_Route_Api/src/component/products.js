import React, {Component} from 'react';
import ProductList from './productListing';

const url = "http://localhost:6700/products"; //connect the url var to the json-server hosted db2.json file

class Products extends Component { //class component
    constructor(){ //initialized the component
        super()
        this.state ={ //state 
            title: 'Products Page', //props defined
            products: ''
        }
    }
    componentDidMount(){ //lifecycle event hook. Called automatically once this component is mounted on the view
        fetch(url,{method:'GET'})  //fetch calls the json-server REST API
        .then((response) => response.json()) //if success, retuns an async Promise with the data from the service as response obj
        .then((data) => {  //data is auto populated by the fetch method with data from the REST service
            this.setState({ //sets the data retreived from the service to the local props via the state
                products:data
            })
        })
    }
    render(){ //display this component in the view
        console.log(this.state.products); //print products on the console of the browser
        return( //display title and inject ProductsList component here by passing the products data to it
            <div>
                <center>
                    <h2>{this.state.title}</h2>
                </center>
                <ProductList prodlist={this.state.products}/>
            </div>
        )
    }
}

export default Products;