import React from 'react';
const Product = (props) => { 
    return (
        <div style={{border: '1px solid gray',padding:'10px',marginTop:'5px' }}>
            <p>{props.product.name}</p>
            <button onClick={()=>props.addToCart(props.product.id,props.product.name,)}>add to cart</button>
        </div>
    );
};

export default Product;