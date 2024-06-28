import { createStore , applyMiddleware} from 'redux';
import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import CategoriesReducer from './CategoriesReducer';
import { thunk } from 'redux-thunk';

const reducer = combineReducers(
    {
        cart:CartReducer,
        categories:CategoriesReducer
    }
);

const store = createStore(reducer,applyMiddleware(thunk));

export default store;