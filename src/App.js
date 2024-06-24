import './App.css';
import  useDisplay  from './myHook/useDisplay'
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';
import { CartContext } from './contexts/CartContext';
function App() {
  console.log(a, b);
  let [height,width] = useDisplay();
  let [cart,setCart] = useState({});
  
  function increaseQuantity(product){
    const newCart = {...cart}
    if(!newCart[product.id])
      {
        newCart[product.id] = {
          ...product,
          quantity:0
        };
      }
      console.log("item added")
      newCart[product.id].quantity +=1;
      setCart(newCart);
  }
  function decreaseQuantity(product){
    const newCart = {...cart}
    if(!newCart[product.id]) return;
    newCart[product.id].quantity -=1;
    if(newCart[product.id].quantity<=0)
      {
        delete newCart[product.id];
      }
      setCart(newCart);
  }
  
  return (
    <div className="App">
      <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
        <Products />
        {/* <Products cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/> */}
      </CartContext.Provider>
      
    </div>
  );
}

export default App;
