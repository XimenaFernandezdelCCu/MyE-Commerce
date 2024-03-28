import { useSelector, useDispatch } from "react-redux";
import { addItem2Cart, removeItemFromCart } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faWifi, faCreditCard }  from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import chip from '../../images/chip.png'
import mockData from '../../mockData/items.json'

export default function CartDetails({authState, cart, filtered}) {

    // ------------redux
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
    // const authState = useSelector((state) => state.auth);
  
    console.log("user: ", authState.userDetails.first);
    // const user = authState.userDetails.pk == 0 ? users[1] : authState.userDetails;
    
    // const pref = user.preferred ? user.preferred : user.first; 
  
    
    // const filtered = mockData.filter(book => 
    //   cart.cartItems.some(item => item.id === book.pk)
    // );
  
    // const total = filtered.reduce((acc, book, index) => {
    //   const itemTotal = book.price * cart.cartItems[index].qty;
    //   return acc + itemTotal;
    // }, 0);
    //   console.log(filtered[0].price+1);
    // console.log("qty: ",cart.cartItems[0].qty);
   
    return(

          <div className='cartItems' >
          {filtered.map((item, index)=>
            <li className='flex cartDets' key={item.pk} >
              <FontAwesomeIcon icon={faBookOpen} />

              <h4>{item.author}'s {item.title}</h4>

              <h4>{item.price} $</h4>

              <div className="flex cartDets">
                <button 
                onClick={()=>{removeItemFromCart(dispatch, item.pk)}}
                id="circular"
                >-</button>
                <p>{cart.cartItems[index].qty}</p>
                <button onClick={()=>{addItem2Cart(dispatch, item.pk)}}
                id="circular"
                >+</button>
              </div>
              <h4>total {item.price * cart.cartItems[index].qty} </h4>
              {/* <button>del</button> */}
            </li>
          )}
          </div>
         

    )
}