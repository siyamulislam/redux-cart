import React from 'react';
import { connect } from 'react-redux'; 
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => { 
    const {products,addToCart}=props; 
    return (
        <div>
                <h2>Shop</h2>
               
               {
                    products.map(pd =>  <Product key={pd.id} product= {pd}
                        addToCart={addToCart}
                    
                         ></Product>)
               }
        </div>
    );
};
const mapStateToProps= state=>  {
    return{ 
        products: state.products,
    };
}
const mapDispatchToProps=  {
    addToCart: addToCart
}
// const connectToStore= connect(mapStateToProps,mapDispatchToProps);
// connectToStore(Shop)

// connect(mapStateToProps,mapDispatchToProps)(Shop); 
export default connect(mapStateToProps,mapDispatchToProps)(Shop);