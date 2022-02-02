export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_TO_CART';

export const addToCart =(id,name) => {  
    console.log(id);
    return {type: ADD_TO_CART,id,name}
}
export const removeFromCart =cartID => {
    return {type: REMOVE_FROM_CART,cartID}
}