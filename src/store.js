import { combineReducers } from "redux";
import testReducer from "./reducers/testReducer";
import studentReducer from "./reducers/studentReducer";
import { legacy_createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import productReducer, { singleProductReducer } from "./reducers/productReducer";


const reducer=combineReducers({
    test:testReducer,
    student:studentReducer,
    productsData:productReducer,
    product:singleProductReducer
})

const store=legacy_createStore(reducer,applyMiddleware(thunk))

export default store 
