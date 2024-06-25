import {createStore} from 'react'
function CartReducer(state = {items:{}},action){
    switch(action.type){
        case 'ADD_TO_CART':{
            const product = action.payload;
            
        }
        case 'REMOVE_FROM_CART':{

        }
        default:
            return state;
    }
}

const store = createStore(CartReducer);

export default store;

// action has two keys

// add to cart or remove from cart

// payload (item)