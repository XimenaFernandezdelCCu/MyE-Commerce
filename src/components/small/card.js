import { useSelector, useDispatch } from "react-redux";
import { addItem2Cart, removeItemFromCart } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCartPlus } from '@fortawesome/free-solid-svg-icons';


export default function Card({title,author, onClick, Pk}) {
  // ------------redux
  const dispatch = useDispatch();
  // const cart = useSelector((state) => state.cart);
  
    return (
      <div className='card'  id={Pk} 
      style={{maxWidth: "20%",
        maxHeight: "50vh"}}>
        <div  onClick={onClick}>
          <FontAwesomeIcon icon={faBookOpen} />
          {/* <img src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img> */}
          <p className="title" >{title}</p>
          <p>{author}</p>
        </div>
        <button 
                type="submit" 
                className="pill"
                onClick={()=>{addItem2Cart(dispatch, Pk)}}
                    // style={{zIndex: "100"}}
                ><FontAwesomeIcon icon={faCartPlus} /></button>
        {/* <button 
        type="submit" 
        className="pill"
          onClick={()=>{addItem2Cart(dispatch, Pk)}}
          // style={{zIndex: "100"}}
        >cart</button> */}
        {/* <button onClick={()=>{removeItemFromCart(dispatch, Pk)}} >remove</button> */}
        
      </div>
    )
  };