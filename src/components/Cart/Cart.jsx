import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard';

const Cart = () => {
    const cart  = useSelector((state)=>{
        return state.cart.items;
    })
    
  return (
    <div>
        {
        Object.values(cart).map(function(item){
            return(<CartCard key={item.id} item={item}/>)
        })
        }
    </div>
  )
}

export default Cart