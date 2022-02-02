import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { name: 'Lenovo', id: 1},
        { name: 'HP', id: 2},
        { name: 'Asus', id: 3},
        { name: 'Dell', id: 4},
        { name: 'Mi', id: 5},
    ]
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newID = action.id;
            const newCart = [...state.cart, newID]; 
            return { cart: newCart , products:state.products};
        case REMOVE_FROM_CART:
            console.log('object');
            const remainCart = state.cart.filter(item => item !== action.id);
            return { ...state,cart: remainCart };
        default:
            return state;
    }
}

export default cartReducer;