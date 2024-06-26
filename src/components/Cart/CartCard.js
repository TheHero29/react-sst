import React from 'react'

const CartCard = ({item}) => {
  return (
    <div>
        <h4>Title-{item.title}</h4>
        <p>Unit Price- {item.price}</p>
        <p>Quantity - {item.quantity}</p>
        <p>Price - {item.price*item.quantity}</p>
        <img src={item.image}></img>
    </div>
  )
}

export default CartCard