
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { cleanRawCart, deleteFromWish, add2Wishlist } from "../../utils/utils";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";



export default function WishButton({pk}){    
    const reduxAuth = useSelector((state) => state.auth);
    const isAuthenticated = reduxAuth.auth;
    const [wishlistItems, setWishlistItems] = useState([]);
    const [ask2Log, setAsk2Log] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const localWish = localStorage.getItem(`${reduxAuth.id}_Wish`);

        if(localWish){
            setWishlistItems(cleanRawCart(localWish.split(',').map(Number)));            
        } 
        
    }, []);

    return (
        <>
        {isAuthenticated && !isNaN(reduxAuth.id) ?
        <> 
        {wishlistItems.map((item)=>item).includes(pk)?
            <button
            // remove from wishlist 
            onClick={(event)=>{event.stopPropagation(); 
                const wishIds = deleteFromWish(reduxAuth.id, pk);
                if (wishIds){
                    setWishlistItems(wishIds)
                }
            }}
            >
                <FontAwesomeIcon icon={solidHeart} />
            </button>

        :
            <button
            // add to wishlist 
            onClick={(event)=>{event.stopPropagation(); 
                const wishIds = add2Wishlist(reduxAuth.id, pk);
                if (wishIds){
                    setWishlistItems(wishIds);
                }

            }}
            >
                <FontAwesomeIcon icon={regularHeart} />
            </button>
        
        }
        </>
        :
        <>
        {ask2Log?
        <div style={{padding:"3%"}} >
        <p>To add Items to a wishlist you need to be logged in.</p>
        <Link to='/auth' className="link" >Login</Link>
        </div>
        :
        <button
            // ask to log in to add to wishlist
            onClick={(event)=>{event.stopPropagation(); setAsk2Log(true)}}
            
            >
            <FontAwesomeIcon icon={regularHeart} />
        </button>
        }
        
        
        </>
        }
        

        {/* <div>
            <button onClick={()=>navigate(`/products/${pk}`)}  >See More Details</button>
        </div> */}
        </>

    )
}