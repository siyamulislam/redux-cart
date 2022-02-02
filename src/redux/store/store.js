import { createStore } from "redux";
import cartReducer from "../reducers/cardReducers";

export const store = createStore(cartReducer);