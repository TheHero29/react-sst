import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
import useDisplay from "../../myHook/useDisplay";
function Products() {
  console.log("Products")
    // const products = [
    //       {
    //         id: 1,
    //         title: "Apple iPhone 14",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 2,
    //         title: "Apple iPhone 13",
    //         price: "Rs. 70,000"
    //       },
    //       {
    //         id: 3,
    //         title: "Google Pixel 7",
    //         price: "Rs. 50,000"
    //       },
    //       {
    //         id: 4,
    //         title: "Nokia 1100",
    //         price: "Rs. 2,000"
    //       },
    //       {
    //         id: 5,
    //         title: "Samsung Galaxy S10",
    //         price: "Rs. 1,00,000"
    //       },
    //       {
    //         id: 6,
    //         title: "Sony Xperia S10",
    //         price: "Rs. 1,00,000"
    //       }
    //     ];
    let [products,setProducts] = useState([]);
    useEffect(() => fetch('https://fakestoreapi.com/products/').then(
      (response) =>{return response.json();
      }
    ).then((res)=>{
      console.log("procuts");
      setProducts(res);
    }),[]);
    return (
      <div>
          <div><Effect /></div>
            {
                products.map(function (item,index) {
                    return (<ProductCard key ={index} title={item.title} price={item.price} image={item.image}/>)
                })
            }
        </div>
    )
}
export let a = 10;
export let b = 20;
export default Products;
// Javascript XML 

//ProductCard(title)
//named export 
//default export
// One default export
// multiple named exports

{/* 
old
<ProductCard key = 1> </ProductCard> 
<ProductCard key = 2> </ProductCard> 
<ProductCard key = 3> </ProductCard> 

new 
<ProductCard key = 1> </ProductCard> 
<ProductCard key = 4> </ProductCard> 
<ProductCard key = 2> </ProductCard> 
<ProductCard key = 3> </ProductCard> 
*/}