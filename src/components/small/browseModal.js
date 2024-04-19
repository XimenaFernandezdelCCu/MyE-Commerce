import { useDispatch, useSelector } from "react-redux";
// import { handleAdd2Wishlist, addItem2Cart } from "../../utils"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';

export default function BrowseModal({book}){
    console.log("book: ", book)
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
                    <button  
                    // onClick={()=>handleAdd2Wishlist(dispatch, book.pk, userDetails.mail)}
                    > <FontAwesomeIcon icon={faHeart}  />
                      Wish</button>
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
                type="submit" 
                
                // onClick={()=>{addItem2Cart(dispatch, book.pk,  userDetails.mail)}}
                    // style={{zIndex: "100"}}
                ><FontAwesomeIcon icon={faCartPlus} /></button>

                <button 
                onClick={handleMoreDetails}
                style={{backgroundColor: "white" }}
                >See All Details</button>
            </div>
        </div>
    )
}