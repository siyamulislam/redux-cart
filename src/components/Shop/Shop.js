import React from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const products= [
        {name: 'Lenovo', id: 1},
        {name: 'HP', id: 2},
        {name: 'Asus', id: 3},
        {name: 'Dell', id: 4},
        {name: 'Mi', id: 5},
    ]
    return (
        <div>
                <h2>This is Shop</h2>
               
               {
                    products.map(pd =>  <Product key={pd.id} product= {pd} ></Product>)
               }
        </div>
    );
};

export default Shop;