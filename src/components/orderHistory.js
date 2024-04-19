// import { useState } from "react";
// import { useSelector } from "react-redux";
// import Modal from './small/modal'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookOpen }  from '@fortawesome/free-solid-svg-icons'


// export default function OrderHistory(){
//     let [showModal, setShowModal] = useState([false, ""]);
//     const orders = useSelector((state) => state.orders);
    
//     const handleOrderClick =(order)=>{
//         setShowModal([true, order])
//     }

//     const orderDetails =(order)=> <>
//         <h3>Order: {order.number}</h3>
//         <h4>{order.items.length} Items</h4>
//         <h4>Total: {order.total}</h4>
//     </>

//     return (
//         <div>
//             <h1>Order History</h1>
//             {orders.length > 0 ? 
//                 <div className="flex">
//                     {orders.map((order)=>
//                     <div key={order.number}
//                     onClick={()=>handleOrderClick(order)}>
//                         {orderDetails(order)}
//                     </div>
//                     )}

//                 </div>
            
//             :
//                 <div><h1>Your previous will be shown here.</h1></div>
            
//             }

//         {showModal[0] ? 
//             <Modal clickBackdrop={()=>{setShowModal([false, ""])}} >
//             <div>
//                 {orderDetails(showModal[1])}
//                 {showModal[1].items.map((item, index)=>
//                 <li className='flex cartDets' key={item.pk} >
//                     <FontAwesomeIcon icon={faBookOpen} />
//                     <h4>{item.author}'s {item.title}</h4>
//                     <h4>{item.price} $</h4>
//                     <div className="flex cartDets">
//                         <h4>Quantity: {item.qty}</h4>
//                     </div>
//                 </li>
                

//                 )}
//                 <h4>Order Created: {showModal[1].generated}</h4>
//                 <h4>Order Status: {showModal[1].status}</h4>

//             </div>
//             </Modal> : ""
//         }

//         </div>
//     )
// }