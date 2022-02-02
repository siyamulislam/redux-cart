import React from 'react';

const Product = (props) => { 
    
    return (
        <div style={{border: '1px solid tomato',padding:'10px', }}>
            <p>{props.product.name}</p>
            <button onClick={()=>props.addToCart(props.product.id)}>add to cart</button>
        </div>
    );
};

export default Product;