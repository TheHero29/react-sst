import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
function AddToCart({product}) {
    const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

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

export default AddToCart;