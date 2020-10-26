import {combineReducers} from 'redux'
import AuthReducer from './Redux/Authentication/AuthReducer'
import CategoryReducer from './Redux/Category/CategoryReducer';
import ProductReducer from './Redux/Product/ProductReducer';

export default combineReducers({
    auth:AuthReducer,
    categories:CategoryReducer,
    products: ProductReducer,
})