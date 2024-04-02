import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wishActions, cartActions } from "../../store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import { handleDeleteFromWishlist } from "../../utils";


import mockData from '../../mockData/items.json';

export default function Wishlist () {
    let [showModal, setShowModal] = useState([false, ""]);
    const wishState = useSelector((state)=>state.wish);
    let [data, setData] = useState([]);
    const userMail = useSelector((state) => state.auth.userDetails.mail);    
    console.log("data: " , data)

    const dispatch = useDispatch();

    useEffect(() => {
        const filteredData = mockData.filter(item => wishState.includes(item.pk));
        setData(filteredData);
    }, [wishState]);

    // console.log("-- state --", wishState);
    // //simulate fetching from DB
    // const filtered = mockData.filter((item)=> 
    //     wishState.some(id => id == item.pk ) );
    // console.log("--- fetched data: ", filtered);

    


    // function handleDelWish (Pk){
    //     dispatch(wishActions.removeFromWishlist(Pk));
    //     console.log("removed", Pk);
    // }
    const linkStyle ={
        color: "#cc8245", 
        textDecoration: "none", 
        fontWeight: "bolder",
        marginLeft: "3%" 
        // "&:hover": {
        //   color: "#cc8245"
        // }
      }

    return (
        <div id="wishlist" className="flexcol P3" >
            <h1 style={{alignSelf:"center"}} >WishList</h1>

            <div className="found flex P3 rsquare">
            {data.length== 0?
                <div style={{
                    borderColor: "#cc8245",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    padding: "10px"
                }}>
                <h2>Uh oh!</h2>
                <h4>There are no items in this list<br/> You can add them in the 
                <Link to='/home' style={linkStyle}>Shop</Link>. </h4>

                </div>
            :
                <>
                    {data.map((book, index)=>
                        // <CardWish onClick={(event)=>{setShowModal([true, data[index]])}}
                        //     Pk={book.pk}
                        //     title={book.title}
                        //     author={book.author} key={index}
                        //     setData={setData} >
                        // </CardWish>
                        <div id={book.pk} className='card'
                            key={index}
                            style={{
                            width:"100%", 
                            display:"flex", 
                            flexDirection: "column"
                            }}>
                            <button 
                            id="circular"
                            onClick={()=>{handleDeleteFromWishlist(dispatch, book.pk, userMail)}}
                            ><FontAwesomeIcon icon={faTrash} size={"xs"} /></button>

                            <div className="flex" style={{justifyContent:" space-evenly"}}>
                            <FontAwesomeIcon icon={faBookOpen} />
                            <div>
                                
                                {/* <img src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img> */}
                                <p className="title" >{book.title}</p>
                                <p>{book.author}</p>
                            </div>
                            
                            <button type="submit" className="pill"
                                onClick={()=>{ dispatch(cartActions.add2Cart(book.pk))}}
                                // style={{zIndex: "100"}}
                            ><FontAwesomeIcon icon={faCartPlus} /></button>
                            {/* <button onClick={()=>{removeItemFromCart(dispatch, Pk)}} >remove</button> */}
                            </div>

                        </div>


                    )}
                </>
            }</div>
            
            
            
        </div>
    )

};