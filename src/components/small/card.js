import { useSelector, useDispatch } from "react-redux";
import { addItem2Cart, removeItemFromCart } from "../../utils";


export default function Card({title,author, onClick, Pk}) {
  // ------------redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  
    return (
      <div   id={Pk} >
        <div className='card' onClick={onClick}>
        <img src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
        <p className="title" >{title}</p>
        <p>{author}</p>
        </div>
        <button type="submit" 
          onClick={()=>{addItem2Cart(dispatch, Pk)}}
          // style={{zIndex: "100"}}
        >cart</button>
        <button onClick={()=>{removeItemFromCart(dispatch, Pk)}} >remove</button>
        
      </div>
    )
  };