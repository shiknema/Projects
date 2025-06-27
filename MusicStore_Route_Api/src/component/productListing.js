import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';


const ProductList = (prodlist) => { //functional component

    const renderList = ({prodlist}) => { //accepts the products data passed tpo this component by products.js //Custom function

        if(prodlist){ //if the function argument has data , display it
            return prodlist.map((data) => {  //map(), calls this code once for each record inside the prodlist array
                return( //generate a dynamic route for individual product image the user clicks on (eg: /product/2)
                <Link key={data.id} to={`/product/${data.id}`} >
                    <div className="card col-md-3">
                        <div className="row">
                            <div className="card-img">
                            <img className="card-img-top" src={data.img} alt={data.name}/>
                            </div>
                            <hr/>
                            <span className="topTemp">{data.name}</span>
                            </div>
                            <div className="card-body">
                            <span className="max">Rs. {data.price}</span>  
                                <h4 className="card-title">{data.type}</h4>
                                <div className="card-text">
                                    <p className="day">Rs. {data.price}</p>
                                </div>
                        </div>
                    </div>
                </Link>
                )  
            })
        }  
    }
    return( //calls the custom rendeRList() method above to render the view
        <div className="container">
            <div  className="row">
                {renderList(prodlist)}  {/* Passes the accepted products data to the renderList function for displaying it */}
            </div>
        </div>
    )
}

export default ProductList;