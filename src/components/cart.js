import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store";

import mockData from '../items.json';
const someItems = mockData.splice(20);

export default function Cart() {

  // ------------redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const name = "Ximena";
  
  const qty = 1;

  const cartData = ()=>{
    console.log(cart.cartItems);
    const data = cart.cartItems.map((key)=>{mockData.find((book)=>book.pk == key)})
    console.log("data: ",data);
  }
  

  return (
    <div className="cart rsquare P3" >
      <h1>{name}'s Cart</h1>
      <div className='cartItems' >
        {someItems.map((item)=>
          <li className='flex' key={item.pk} >
            <div>img</div>
            <h4>{item.author}'s {item.title}</h4>
            <h4>{item.price} $</h4>
            <div>
              <button>-</button>
              <button>{qty}</button>
              <button>+</button>
              
            </div>
            <h4>total price </h4>
            <button>del</button>
          </li>
        )}
      </div>
      <hr></hr>
      <h3>Total: number </h3>
      <button onClick={cartData} >Checkout</button>
      
    </div>
  );
  };