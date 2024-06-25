import { useSelector,useDispatch } from "react";
import { CartContext } from "../../contexts/CartContext";
function ReduxAddToCart({product}) {
    //useSelector 
    // how is useSelector taking state as input?
    let cart = useSelector((state)=>{
        return state.item;
    })    
    function increase(){
        //dispatch {type,payload}
        dispatchEvent({type:'ADD_TO_CART',payload:product})
    }
    function decrease(){
        //dispatch {type,payload}
        dispatchEvent({type:'REMOVE_FROM_CART',payload:product})
    }

    const quantity = cart[product.id] ? cart[product.id].quantity : 0;
    if(quantity===0)
        return (
    <div>
        <button onClick={increase}>Add to cart</button>
    </div>
    )
    else
    return (
        <div>
            {/* <button onClick={()=>{setQuantity(quantity+1)}}>+</button> */}
            <button onClick={increase}>+</button>
             <span>{quantity}</span>
            {/* <button onClick={()=>{if(quantity>0)setQuantity(quantity-1)}}>-</button> */}
            <button onClick={decrease}>-</button>
        </div>
 )
}

export default ReduxAddToCart;