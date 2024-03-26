import { useSelector, useDispatch } from "react-redux";
import { addItem2Cart, removeItemFromCart } from "../utils";

import mockData from '../mockData/items.json';

export default function Cart() {

  // ------------redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const name = "Ximena";

  console.log(cart);
  
  const filtered = mockData.filter(book => 
    cart.cartItems.some(item => item.id === book.pk)
  );

  const total = filtered.reduce((acc, book, index) => {
    const itemTotal = book.price * cart.cartItems[index].qty;
    return acc + itemTotal;
  }, 0);
  //   console.log(filtered[0].price+1);
  // console.log("qty: ",cart.cartItems[0].qty);
  console.log(total);
  

  return (
    <div className="cart rsquare P3" >
      <h1>{name}'s Cart</h1>
      <h4>{cart.cartItems.length } items</h4>
      {cart.cartItems.length >0 ? 
        <div>
          <div className='cartItems' >
          {filtered.map((item, index)=>
            <li className='flex' key={item.pk} >
              <div>img</div>
              <h4>{item.author}'s {item.title}</h4>
              <h4>{item.price} $</h4>
              <div className="flex">
                <button onClick={()=>{removeItemFromCart(dispatch, item.pk)}} >-</button>
                <p>{cart.cartItems[index].qty}</p>
                <button onClick={()=>{addItem2Cart(dispatch, item.pk)}}>+</button>
                
              </div>
              <h4>total {item.price * cart.cartItems[index].qty} </h4>
              {/* <button>del</button> */}
            </li>
          )}
          </div>
          <hr></hr>
          <h3>Total: {total} </h3>
          <button >Checkout</button>
        </div>
        :
        <h1>Your cart is empty!</h1>
      
      }

      
      
    </div>
  );
  };