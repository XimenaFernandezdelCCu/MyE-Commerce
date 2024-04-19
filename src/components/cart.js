import { useSelector, useDispatch } from "react-redux";
// import { ordersActions, cartActions } from "../store";
import { addItem2Cart, removeItemFromCart } from "../utils";
import users from '../mockData/users.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import mockData from '../mockData/items.json';
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";


import CartDetails from "./small/cartDetails";
import Loader from "./small/loader copy";


export default function Cart() {

  const [checkout, setCheckout] = useState(false);
  const [loader, setLoader] = useState(false);

  // // ------------redux
  const cart = useSelector((state) => state.cart);
  const order = useSelector((state) => state.orders);
  const authState = useSelector((state) => state.auth);
  const userMail = useSelector((state) => state.auth.userDetails.mail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = authState.userDetails.pk == 0 ? users[1] : authState.userDetails;

  const pref = user.preferred ? user.preferred : user.first;
  const filtered = mockData.filter(book =>
    cart.cartItems.some(item => item.id === book.pk)
  );

  const total = filtered.reduce((acc, book, index) => {
    const itemTotal = book.price * cart.cartItems[index].qty;
    return acc + itemTotal;
  }, 0);

  const linkStyle = {
    color: "#cc8245",
    textDecoration: "none",
    fontWeight: "bolder",
    marginLeft: "3%"
    // "&:hover": {
    //   color: "#cc8245"
    // }
  }

  const generateCombinedArray = (filtered, cartItems) => {
    console.log("inside filtered: ", filtered);
    console.log("inside cart: ", cartItems);

    const combinedArray = filtered.map((item) => {
      const cartItem = cartItems.find((cartItem) => cartItem.id === item.pk);
      const quantity = cartItem ? cartItem.qty : 0;
      return { ...item, qty: quantity };
    });
    return combinedArray;
  };

  const handlePay = () => {
    setCheckout(false)
    const orderNum = order.length > 0 ? order.length + 1 : 1;
    const statusOptions = ['received', 'shipped', 'delivered'];
    const newOrder = {
      number: orderNum,
      items: generateCombinedArray(filtered, cart.cartItems),
      total: total,
      status: statusOptions[Math.floor(Math.random() * statusOptions.length)],
      generated: new Date().toLocaleString()
    }

    const localStore = JSON.parse(localStorage.getItem("Marketfy_" + userMail));
    let updated = { ...localStore };
    updated.cart = []
    localStorage.setItem("Marketfy_" + userMail, JSON.stringify(updated));

    console.log("new order: ", newOrder)
    // dispatch(ordersActions.createOrder(newOrder))
    // dispatch(cartActions.removeAllFromCart());
    navigate('/profile')

  }





  return (
    <div>


      {!checkout ?
        <div className="cart rsquare P3">
          <h1>{pref}'s Cart</h1>
          <h4>{cart.cartItems.length} items</h4>
          {cart.cartItems.length > 0 ?
            <div>
              <CartDetails authState={authState} cart={cart} filtered={filtered}></CartDetails>
              <hr></hr>
              <h3>Total: {total} </h3>
              <button className="pill"
                onClick={() => { setCheckout(true) }}
              >Checkout</button>
            </div>
            :
            <>
              <h1>Your cart is empty!</h1>
              <h4><br /> You can add items to your cart in the
                <Link to='/home' style={linkStyle}>Shop</Link>. </h4></>
          }
        </div>
        :
        <div className="checkout">
          <h1>Checkout</h1>
          <button className="pill"
            onClick={() => setCheckout(false)}
          >Back to Cart</button>
          <div style={{ backgroundColor: "white" }} >
            {/* <h4>Steps</h4> */}

            <div className="orangeBorder flex spacebetween">

              <div>
                <div>
                  <h4>Confirm your details</h4>
                  <div className="flex profileInfoItem" >
                    <label><h5>Name</h5></label>
                    <div className="flex">
                      <input placeholder="First" type="text" ></input>
                      <input placeholder="Last" type="text" ></input>
                    </div>
                  </div><hr />

                  <div className="flex profileInfoItem" >
                    <label htmlFor="emailInput"><h5>Email</h5></label>
                    <input id="emailInput" placeholder="Email" type="email" ></input>
                  </div><hr />
                </div>
                <div>
                  <h4>Payment Method</h4>

                  <form>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <p>Credit / Debit Card</p>

                    <div className="flex profileInfoItem" >
                      <label><h5>Card Number</h5></label>
                      <input placeholder="**** **** **** ****" type="text" ></input>
                    </div><hr />

                    <div>
                      <div className="flex profileInfoItem" >
                        <label><h5>Expiration</h5></label>
                        <input placeholder="MM / YY" type="text" ></input>
                      </div><hr />
                      <div className="flex profileInfoItem" >
                        <label><h5>Code</h5></label>
                        <input placeholder="Code" type="text" ></input>
                      </div><hr />

                    </div>
                  </form>
                </div>
                <div>
                  <h4>Shipping Details</h4>
                  <form>
                    <div className="flex profileInfoItem" >
                      <label><h5>Adress</h5></label>
                      <input placeholder="542W Elm St." type="text" ></input>
                    </div><hr />


                    <div className="flex profileInfoItem" >
                      <label><h5>City</h5></label>
                      <input placeholder="Denver" type="text" ></input>
                      <label><h5>State</h5></label>
                      <input placeholder="Colorado" type="text" ></input>
                    </div><hr />
                    <div className="flex profileInfoItem" >
                      <label><h5>Zip</h5></label>
                      <input placeholder="10 524" type="text" ></input>
                    </div><hr />
                    <div className="flex profileInfoItem" >
                      <input type="checkbox" ></input>
                      <label><p>Shipping Adress same as Billing</p></label>

                    </div><hr />



                  </form>

                </div>
              </div>

              {cart.cartItems.length > 0 ?
                <div style={{ width: "50%" }} >

                  <div>

                    <h4>Order Details</h4>
                    <CartDetails authState={authState} cart={cart} filtered={filtered}></CartDetails>
                    <hr></hr>
                    <h3>Total: {total} $ </h3>
                  </div>

                  <div>
                    <button className="pill"
                      onClick={handlePay}
                    > PAY  {total} $ </button>
                  </div>
                  {/* <Loader></Loader> */}
                </div>
                :
                <>
                  <h1>Your cart is empty!</h1>
                  <h4><br /> You can add items to your cart in the
                    <Link to='/home' style={linkStyle}>Shop</Link>. </h4></>
              }



            </div>
          </div>
        </div>
        }

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