import { combineReducers } from "redux";
import testReducer from "./reducers/testReducer";
import studentReducer from "./reducers/studentReducer";
import { legacy_createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

const reducer=combineReducers({
    test:testReducer,
    student:studentReducer,
    productsData:productReducer
})
const middleware=[thunk]

const store=legacy_createStore(reducer,applyMiddleware(...middleware))

export default store 