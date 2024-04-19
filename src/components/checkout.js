import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { useSelector, useDispatch } from "react-redux";
import { emptyCart, generateOrderId } from "../utils/utils";
import mockData from "../mockData/items.json"
// import axios from 'axios';
// import { useAxiosPost } from "../../hooks/useAxiosPost";
// import { AddItems2OrderAction } from "../../utils/responseActions";

import { useState } from "react";

//components
import Loader from "./reusable/loader";
import OrderDetails from "./small/orderDetails";
import Payment from "./small/payment";
import Shipping from "./small/shipping";

export default function Checkout() {
    const [loader, setLoader]= useState(false);
    const {total, setCheckout, cartObj, cartLength}= useContext(CartContext);
    const reduxAuth = useSelector((state) => state.auth);
    const dispatch = useDispatch();



    function showLoader() {
        setLoader(true);
        const timeout = setTimeout(() => {
            setLoader(false);
        }, 4000);
        return () => clearTimeout(timeout);
    }

    function generateOrder() {
        showLoader()
        const id = reduxAuth.id;

        if (!isNaN(id) && id !== 0){

            const newId = generateOrderId(id);

            const order = {
                orderId: newId,
                date: new Date().toISOString(),
                totalItems: cartLength,
                total: total,
                products: cartObj.map((it)=>{
                    return {
                        productId: it.id,
                        qty: it.qty, 
                        author: mockData.find((book)=>book.pk == it.id).author, 
                        title: mockData.find((book)=>book.pk == it.id).title
                    }
                })
            }


            const orders = JSON.parse(localStorage.getItem(`${id}_Orders`));
            if(orders){
                console.log("orders--: ", orders);
                const updateOrders = orders.push(order);
                console.log("updatded", updateOrders);
                localStorage.setItem(`${id}_Orders`, JSON.stringify(orders));
            } else {
                localStorage.setItem(`${id}_Orders`, JSON.stringify([order]));
            }
            
            emptyCart(dispatch)
            window.location.href = '/profile/orders'

        } 
    }
    
    return (
        <div className="orangeBorderCard rounded m3 p3" >
            <div className="flex justifybetween" >

                <button
                onClick={() => setCheckout(false)}
                >Back to Cart</button>
                <h1 className="title" >Checkout</h1>
            </div>

            <div className="flex justifyEvenly wrapp 
            relative rounded">

                {loader &&
                    <div
                    style={{
                        position: "absolute",
                        zIndex: "10",
                        width:"100%",
                        height: "100%",
                        backgroundColor:"rgba(215, 215, 215, 0.5)",
                        display:"flex", 
                        alignItems: "center", 
                        justifyContent: "center"
            

                    }}
                    >
                        <Loader 
                        className="modal"
                        ></Loader>
                    </div>
                }

                <OrderDetails></OrderDetails>

                <Payment></Payment>
                <Shipping></Shipping>

            </div>

            <hr/>
            <div className="flex justifyCenter" >
                <button
                onClick={generateOrder}
                >PAY {total}</button>
            </div>
                     
        </div>
    )
}