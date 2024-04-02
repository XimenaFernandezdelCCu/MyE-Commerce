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
    const userMail = useSelector((state) => state.auth.userDetails.mail);  
    console.log("usermail: ", userMail);
   

    return(

          <div className='cartItems' >
          {filtered.map((item, index)=>
            <li className='flex cartDets' key={item.pk} >
              <FontAwesomeIcon icon={faBookOpen} />

              <h4>{item.author}'s {item.title}</h4>

              <h4>{item.price} $</h4>

              <div className="flex cartDets">
                <button 
                onClick={()=>{removeItemFromCart(dispatch, item.pk, userMail)}}
                id="circular"
                >-</button>
                <p>{cart.cartItems[index].qty}</p>
                <button onClick={()=>{addItem2Cart(dispatch, item.pk, userMail)}}
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