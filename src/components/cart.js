import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store";

import mockData from '../items.json';
const someItems = mockData.splice(20);

export default function Cart() {

  // ------------redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const itemKey = 3;

  function trial(){
    console.log(">----------------")
    // console.log("state: ", state)
    console.log(cart.cartItems);
    dispatch(cartActions.add2Cart());
    // console.log(cart);
    console.log("----------------<")
  };
  trial();


  const name = "Ximena";
  
  const qty = 1;
  console.log(someItems)
  

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
      <button>Checkout</button>
      
    </div>
  );
  };