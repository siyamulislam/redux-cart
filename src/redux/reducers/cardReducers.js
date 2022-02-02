import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newID = action.id;
            const newCart = [...state.cart, newID];
            return { cart: newCart };
        case REMOVE_FROM_CART:
            const remainCart = state.cart.filter(item => item !== action.id);
            return { cart: remainCart };

        default:
            return state;
    }
}

export default cartReducer;