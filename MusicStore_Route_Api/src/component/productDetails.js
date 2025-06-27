import React, {Component} from 'react';
import Listing from './detailListing';

const url= 'http://localhost:6700/products'; //json-server hosted RESP API url -- db2.json file

class ProductDetail extends Component { //class component
    constructor(props){
        super(props);

        this.state={ //state
            details:'' //props
        }
    }
    componentDidMount(){ //lifecycle hook event called after the component is rendered in the view
        console.log(this.props.match.params.productId); //print the selected product id in the console of the browser
        fetch(`${url}/${this.props.match.params.productId}`,{ //get the product record for a particular productid from the RESt API, based on dynamic route
            method:'GET'
        })
        .then(response => response.json()) //if sucess the response object is retreived as a Promise async mode
        .then((data)=> { //the data retreived from the REST api is passed to the data argument by the system
            this.setState({ // the specific record retreived is stored in the local props variable via the state
                details:data
            })
        
        })
    }
    render(){ //pass the specific product record retreived to the Listing component for displaying it
        return(
            <div>
                <center>
                    <h2>Product Details</h2>
                </center>
                <Listing detaildata={this.state.details}/>  {/*Passed the product details to Listing componenet for display  */}
                
            </div>
        )
    }
}

export default ProductDetail;