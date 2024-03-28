import { useSelector } from "react-redux";
import { addItem2Cart, removeItemFromCart } from "../utils";
import users from '../mockData/users.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck}  from '@fortawesome/free-solid-svg-icons'
import mockData from '../mockData/items.json';
import { useState } from "react";

import CartDetails from "./small/cartDetails";
import Loader from "./small/loader";


export default function Cart() {

  const [checkout, setCheckout] = useState(true);
  const [loader, setLoader] = useState(false);

  // // ------------redux
  const cart = useSelector((state) => state.cart);
  const authState = useSelector((state) => state.auth);

  const user = authState.userDetails.pk == 0 ? users[1] : authState.userDetails;
  
  const pref = user.preferred ? user.preferred : user.first; 
  const filtered = mockData.filter(book => 
    cart.cartItems.some(item => item.id === book.pk)
  );

  const total = filtered.reduce((acc, book, index) => {
    const itemTotal = book.price * cart.cartItems[index].qty;
    return acc + itemTotal;
  }, 0);

  const loaderDisp =(loader == true  ? <Loader></Loader> :  <FontAwesomeIcon
  icon={faCircleCheck}
  style={{
    color: '#8eaf67',
    // opacity: showCheck ? 1 : 0,
    transition: 'opacity 1s ease-in-out',
  }}
  />);
  console.log(loaderDisp);

  const handlePay =()=>{
    setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds
    }, 3000);

  }
  

  return (
    <div>
      <div className="cart rsquare P3">
      <h1>{pref}'s Cart</h1>
      <h4>{cart.cartItems.length } items</h4>
      {cart.cartItems.length >0 ? 
        <div>
        <CartDetails authState={authState} cart={cart} filtered={filtered}></CartDetails>
          <hr></hr>
          <h3>Total: {total} </h3>
          <button className="pill" >Checkout</button>
        </div>
        :
        <h1>Your cart is empty!</h1>
      }
      </div>

      {checkout ? 
        <div className="checkout">
          <h1>Checkout</h1>
          <div style={{backgroundColor: "white"}} > 
          <h4>Steps</h4>

          <div className="orangeBorder flex spacebetween">

            <div>
              <div>
                <h4>Confirm your details</h4>
                <div className="flex profileInfoItem" >
            <label><h5>Name</h5></label>    
            <div className="flex">
                <input placeholder="First"  type="text" ></input>
                <input placeholder="Last" type="text" ></input>
            </div>
        </div><hr/>

        <div className="flex profileInfoItem" >
            <label htmlFor="emailInput"><h5>Email</h5></label>
            <input id="emailInput" placeholder="Email" type="email" ></input>
        </div><hr/>
              </div>
              <div>
                <h4>Payment Method</h4> 

                <form>
                  <FontAwesomeIcon icon={faCreditCard} />
                  <p>Credit / Debit Card</p>

                  <div className="flex profileInfoItem" >
                    <label><h5>Card Number</h5></label>    
                    <input placeholder="**** **** **** ****"  type="text" ></input>
                  </div><hr/>

                  <div>
                  <div className="flex profileInfoItem" >
                    <label><h5>Expiration</h5></label>    
                    <input placeholder="MM / YY"  type="text" ></input>
                  </div><hr/>
                  <div className="flex profileInfoItem" >
                    <label><h5>Code</h5></label>    
                    <input placeholder="Code"  type="text" ></input>
                  </div><hr/>
                    
                  </div>
                </form>
              </div>
              <div>
                <h4>Shipping Details</h4> 
                <form>
                  <div className="flex profileInfoItem" >
                    <label><h5>Adress</h5></label>    
                    <input placeholder="542W Elm St."  type="text" ></input>
                  </div><hr/>

                  
                    <div className="flex profileInfoItem" >
                      <label><h5>City</h5></label>    
                      <input placeholder="Denver"  type="text" ></input>
                      <label><h5>State</h5></label>    
                      <input placeholder="Colorado"  type="text" ></input>
                    </div><hr/>
                    <div className="flex profileInfoItem" >
                      <label><h5>Zip</h5></label>    
                      <input placeholder="10 524"  type="text" ></input>
                    </div><hr/>
                    <div className="flex profileInfoItem" >
                      <input checked={true} type="checkbox" ></input>
                      <label><p>Shipping Adress same as Billing</p></label>    
                      
                    </div><hr/>
                    
                    
                  
                </form>
              
              </div>
            </div>

            <div style={{width:"50%"}} >
              <div>
                
                <h4>Order Details</h4>
                <CartDetails authState={authState} cart={cart} filtered={filtered}></CartDetails>
                <hr></hr>
                <h3>Total: {total} $ </h3>
              </div>

              <div>
                <button
                onClick={()=>{handlePay}}
                > PAY  {total} $ </button>
              </div>
              <Loader></Loader>
            </div>


          </div>
          </div>
        </div>
      : <></>}
      
      {/* <div className="cardthinggy">
                <h4 className="title alignEnd"  >BANK</h4>
                <img style={{ width:"50px", flexGrow:0}} src={chip} className="title alignEnd" ></img>
                <FontAwesomeIcon icon={faWifi}  />
                <h2 >card number</h2>
                <h5 >Card owner</h5>
                <h2 > 12 / 14 </h2>
                

              </div> */}

      
      
    </div>
  );
  };