import { useDispatch, useSelector } from "react-redux";
import { handleAdd2Wishlist, addItem2Cart } from "../../utils"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';

export default function BrowseModal({showModal}){
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.auth.userDetails);
    const navigate = useNavigate();

    const handleMoreDetails =()=>{
        navigate(`/products/${showModal[1].pk}`)
    }

    return (
        <div className='modalcontent' >
            <div className='modalinfo' >
                <div className='modala'>
                    <img className='modalimg' src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
                    <h3>{showModal[1].price} $</h3>
                    <button 
                    className="green pill" 
                    onClick={()=>handleAdd2Wishlist(dispatch, showModal[1].pk, userDetails.mail)}
                    > <FontAwesomeIcon icon={faHeart} className="children" />
                      Wish</button>
                </div>
                <div className='modalb'>
                    <h1>{showModal[1].title}</h1>
                    <h3>{showModal[1].author}</h3>
                    <p>{showModal[1].synapsis}</p>
                    <h2>Current stock: {showModal[1].stock}</h2>
                    

                </div>
            </div>

            <div className='modalbtns' >
                <button 
                type="submit" 
                className="pill"
                onClick={()=>{addItem2Cart(dispatch, showModal[1].pk,  userDetails.mail)}}
                    // style={{zIndex: "100"}}
                ><FontAwesomeIcon icon={faCartPlus} /></button>

                <button className="pill"
                onClick={handleMoreDetails}
                style={{backgroundColor: "white" }}
                >See All Details</button>
            </div>
          </div>
    )
}