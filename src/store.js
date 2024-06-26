import { createStore } from 'redux';
import { omit } from 'lodash'
function CartReducer(state = {items:{}},action){
    switch(action.type){
        case 'ADD_TO_CART':{
            const product = action.payload;
            // doesn't making a copy everytime to make a rerender instead of modifying it cause lot of memory waste
            if(state.items[product.id])
            {
                return {
                    ...state,
                    items:{
                        ... state.items,
                        [product.id]:{
                            ...state.items[product.id],
                            quantity:state.items[product.id].quantity+1
                        }
                    }
                }
            }
            else
            {
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity:1
                        }
                    }
                } 
            }
        }
        case 'REMOVE_FROM_CART':{
            const product = action.payload;
            if(state.items[product.id].quantity>1)
            {
                return{
                    ...state,
                    items:{
                        ...state.items,
                        [product.id]:{
                            ...product,
                            quantity:state.items[product.id].quantity-1
                        }
                    }
                }
            }
            else
            {
                return {
                    ...state,
                    items: omit(state.items,[product.id])
                }
            }

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