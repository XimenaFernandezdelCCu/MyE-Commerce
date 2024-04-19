import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookOpen } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Error from "../reusable/error";
import Loader from "../reusable/loader";
import Searchbar from "../reusable/searchbar";

export default function ProfileOrders(){
    const [dbData, setDbData] = useState({orders:[]});
    const [data, setData] = useState({orders:[]});
    const reduxAuth = useSelector((state) => state.auth);



    useEffect(() => {
        const id = reduxAuth.id;
        let localStoreOrders = JSON.parse(localStorage.getItem(`${id}_Orders`));
        if (localStoreOrders){
            const data = {
                userOrders: localStoreOrders.length,
                orders: localStoreOrders
            }
            setDbData(data);
            setData(data)

        }
      
        
        
    }, []);

    

    console.log("data: ", data);

    function getData(input) {
        let search = input.searchText.toLowerCase().replace(/\s+/g, '');

        const filtered = data.orders.filter((order)=>order.orderId.toString().includes(search))
        if (filtered.length>0){
            const newData = {
                userOrders: filtered.length, 
                orders: filtered
            }
            setData(newData)
            console.log("new Data", newData);
        }

    }

    return (
        <>
        <h1>Orders</h1>

        <div>
            <div className="greyContainer rounded m3" >
                {/* {error ?
                    <Error></Error>
                    :
                    <>
                        {loading ?
                            <Loader></Loader>
                            : */}
                            <>

                                {data.orders.length>0?
                                    <>
                                        <p>{data.userOrders} orders found</p>
                                        <Searchbar returnThis={getData} radio={false} ></Searchbar>
                                        <button onClick={()=>setData(dbData)} >Clear Search</button>

                                        <div className="flex wrapp" >

                                            {data.orders.map((order) =>
                                                <div className="greyContainer rounded m3"
                                                key={order.orderId}>
                                                    <h4>Order #{order.orderId}</h4>
                                                    <p>Received: {order.date}</p>
                                                    <li>{order.totalItems} Items:</li>
                                                    <li>
                                                        {order.products.map((book, index) =>
                                                            <div
                                                                className="flex justifyEvenly"
                                                                key={book.productId}>
                    
                                                                <FontAwesomeIcon icon={faBookOpen} />
                                                                <p>{book.qty} Copies of: </p>
                                                                <p>{book.author}'s {book.title}</p>
                                                            </div>
                                                        )}
                                                    </li>
                                                    <li>Total: {order.total}</li>
                    
                    
                                                </div>
                                            )}
                                        </div>
                                    </>
                                : 
                                    <div>
                                        <h2>Uh oh!</h2>                    
                                        <h4>You havent bought any books yet! </h4>
                                        <p>After you checkout, your order details will appear here</p>
                                    </div>
                                }
                            </>
                        {/* }
                    </>
                } */}

            </div>
            
            <div className="flex justifyCenter">

            <Link to='/' className="link">Shop</Link> 
            </div>
        </div>

        </>
    )
}