import { useSelector,useDispatch } from "react";
import { CartContext } from "../../contexts/CartContext";
function ReduxAddToCart({product}) {
    //useSelector 
    let cart = useSelector((state)=>{
        return state.item;
    })    
    function increase(){
        //dispatch {type,payload}
        dispatch({type:'ADD_TO_CART',payload:product})
    }
    function decrease(){
        //dispatch {type,payload}
        dispatch({type:'REMOVE_FROM_CART',payload:product})
    }

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if(quantity===0)
        return (
    <div>
        <button onClick={()=>{{increaseQuantity(product)} console.log("increasing")}}>Add to cart</button>
    </div>
    )
    else
    return (
        <div>
            {/* <button onClick={()=>{setQuantity(quantity+1)}}>+</button> */}
            <button onClick={()=>{increaseQuantity(product)}}>+</button>
             <span>{quantity}</span>
            {/* <button onClick={()=>{if(quantity>0)setQuantity(quantity-1)}}>-</button> */}
            <button onClick={()=>{decreaseQuantity(product)}}>-</button>
        </div>
 )
}

export default ReduxAddToCart;