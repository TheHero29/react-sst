import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard';

const Cart = () => {
    const cart  = useSelector((state)=>{
        return state.items;
    })
    const state = useSelector((state)=>{
        return state
    })
    console.log(state);
  return (
    <div>
        {
        Object.values(cart).map(function(item,index){
            return(<CartCard key={index} item={item}/>)
        })
        }
    </div>
  )
}

export default Cart