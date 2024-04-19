import { useDispatch, useSelector } from "react-redux";
// import { handleAdd2Wishlist, addItem2Cart } from "../../utils"
import { add2Cart, add2Wishlist } from "../../utils/utils";
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import WishButton from "../reusable/wishButton";

export default function BrowseModal({book}){
    const reduxAuth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.auth.userDetails);
    const navigate = useNavigate();

    const handleMoreDetails =()=>{
        navigate(`/products/${book.pk}`)
    }

    return (
        <div style={{height:"100%"}}>

            <div className="flex" style={{height:"80%"}}  >
                <div className="" style={{height:"80%"}}  >
                    <img style={{height:"100%"}}
                    src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>

                    {/* <button  
                    onClick={(event)=>{event.stopPropagation(); add2Wishlist(reduxAuth.id, book.pk)}}
                    > <FontAwesomeIcon icon={faHeart}  />
                      Wish</button> */}
                    <WishButton pk={book.pk}  ></WishButton>
                    
                </div>
                <div >
                    <h1>{book.author}'s {book.title}</h1>
                    <h3>{book.price} $</h3>
                    <p>{book.synapsis}</p>
                    <h3>Current stock: {book.stock}</h3>
                </div>
            </div>

            <div >
                <button
                    onClick={(event) => {event.stopPropagation(); add2Cart(book.pk, dispatch)}}
                    ><FontAwesomeIcon icon={faCartPlus} />
                </button>

                <button 
                onClick={handleMoreDetails}
                style={{backgroundColor: "white" }}
                >See All Details</button>
            </div>
        </div>
    )
}