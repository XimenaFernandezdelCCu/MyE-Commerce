import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux"
import mockData from "../../mockData/items.json"
import { useDispatch } from 'react-redux';
import { add2Cart, deleteFromWish, cleanRawCart } from "../../utils/utils";
import anonymousBook from "../../imgs/anonymousBook.jpg"
import Error from "../reusable/error";
import Loader from "../reusable/loader";

export default function ProfileWishlist() {
    const reduxAuth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [dbData, setDbData] = useState([]);
    const [wishIds, setWishIds] = useState([]);

    useEffect(() => {
        const localWish = localStorage.getItem(`${reduxAuth.id}_Wish`);

        if(localWish){
            setWishIds(cleanRawCart(localWish.split(',').map(Number)));            
        } 
        
    }, []);

    useEffect(() => {
        
        if(wishIds.length>0){
            const products = mockData.filter((book)=>wishIds.includes(book.pk));
            setDbData(products)
        } else {
            setDbData([])
        }

    }, [wishIds]);
    

    return (
        <>
            <h1>Wishlist</h1>

            <div className="relative"  >
                {/* {error?
                    <Error></Error>
                :
                    <>
                    {loading? 
                        <Loader></Loader>
                    : */}
                    <>
    
                    {dbData.length > 0 ?
                        <>
                            {dbData.map((book, index) =>
                                <div key={index} className="greyContainer rounded flex"
                                style={{maxHeight: "20vh", margin: "1%"}}
                                >
                                    <button
                                        onClick={() => {
                                            const newIds = deleteFromWish(reduxAuth.id, book.pk);
                                            if (newIds){
                                                setWishIds(newIds);
                                            }
                                        }}

                                    >
                                        <FontAwesomeIcon icon={faTrash} size={"xs"} />
                                    </button>
                                    
                                    {/* <BrowseCard book={book.pk}></BrowseCard> */}
                                    <div className='flex justifyEvenly'
                                    style={{
                                        height: "90%",
                                        width: "90%"
                                    }}>

                                        <div style={{height:"90%"}}>   
                                            {/*---------- if product has image, display image, else, display placeholder */}
                                            {book.image ?
                                                // <img src={`${book.image}`} style={{width:"100%"}} ></img>
                                                <p>DB Image</p>
                                                
                                            :
                                                // <p>DB Image</p>
                                                <img src={anonymousBook} style={{height:"100%", maxHeight: "20vh"}} ></img>
                                            }
                                        </div>

                                        
                                        <h4>{book.title}</h4>

                                        <h5>By: {book.author}</h5>
                                        <h5>{book.price} $</h5>

                                        <div className='flex' style={{justifyContent: "space-between"}} >
                                            <button
                                            onClick={(event) => {event.stopPropagation(); add2Cart(book.pk, dispatch)}}
                                            ><FontAwesomeIcon icon={faCartPlus} />
                                            </button>

                                        </div>


                                    </div>

                                </div>
                            )}
                        </>
                        :
                        <div className="greyContainer rounded">
                            <h2>Uh oh!</h2>
                            <h4>Your list is empty.</h4>
                        </div>
                    }
                    </>
                    {/* }
                    </>
                } */}

            </div>

            <h4>You can add books to this list in the
                <Link className="right link" to='/'>Shop</Link> </h4>

        </>
    )
}