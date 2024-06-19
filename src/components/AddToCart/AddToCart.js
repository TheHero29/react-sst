function AddToCart({quantity,setQuantity}) {

    return (
        <div>
            AddToCart  - {quantity} 
            <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
            <button onClick={()=>{if(quantity>0)setQuantity(quantity-1)}}>-</button>
        </div>
 )
}

export default AddToCart;