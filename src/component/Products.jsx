import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
    state = { 
        products: [
            { id: 1, name: "Product 1" },
            { id: 2, name: "Product 2" },
            { id: 3, name: "Product 3" }
        ]
     }
    render() { 
        const {products} = this.state;
        return ( <ul>
            { products.map(product => <Link to={`products/`+product.id} key={product.id}><li>{product.name}</li></Link>)}
        </ul> );
    }
}
 
export default Products;