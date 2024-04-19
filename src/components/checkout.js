import { useContext } from "react"
import { CartContext } from "../context/cartContext"
// import axios from 'axios';
// import { useAxiosPost } from "../../hooks/useAxiosPost";
// import { AddItems2OrderAction } from "../../utils/responseActions";

import { useState } from "react";

//components
import Loader from "./reusable/loader";
import OrderDetails from "./small/orderDetails";
import Payment from "./small/payment";
import Shipping from "./small/shipping";
// import '../../style/modal.css'

export default function Checkout() {
    const [loader, setLoader]= useState(false);
    const {total, setCheckout, cartObj, cartLength}= useContext(CartContext);
    // const {postData} = useAxiosPost();


    function showLoader() {
        setLoader(true);
        const timeout = setTimeout(() => {
            setLoader(false);
        }, 4000);
        return () => clearTimeout(timeout);
    }

    // function generateOrder() {
    //     showLoader()
    //     const id = localStorage.getItem("Marketfy_ActiveUser");

    //     if (!isNaN(id) && id !== 0){
    //         const url = "http://localhost:8080/orders";
    //         const order = {
    //             userId: id,
    //             totalItems: cartLength,
    //             total: total,
    //             orderDate: new Date().toISOString()
    //         }
    //         axios.post(url, order)
    //         .then(response => {
    //             console.log("Response: ", response);
    //             const newOrderLink = response.data._links.order.href;
    //             const newOrderID = newOrderLink.split("/").pop();
    //             addItems2Order(newOrderID);
    //         }).catch(error => {
    //             console.error("Oh no!", error)
    //         }); 
    //     }
    // }

    // function addItems2Order(orderId){
    //     const url = "http://localhost:8080/AddOrderItems";
    //     const orderItems = {
    //         orderId: orderId, 
    //         items: cartObj.map((it)=>{return {
    //             productId: it.id,
    //             qty: it.qty
    //         }})
    //     }
    //     postData(url, orderItems, AddItems2OrderAction )
    // }
    
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
                // onClick={generateOrder}
                >PAY {total}</button>
            </div>
                     
        </div>
    )
}