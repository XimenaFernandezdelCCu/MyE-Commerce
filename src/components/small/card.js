import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store";

export default function Card({title,author, onClick, Pk}) {
  // ------------redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

    console.log("store: ", cart);

    const algo =(Pk)=>{
      console.log("cartttttttt");
      console.log(Pk)
      dispatch(cartActions.add2Cart(Pk));
    }
    const algo2 =(Pk)=>{
      console.log(" no cartttttttt");
      console.log(Pk)
      dispatch(cartActions.removeFromCart(Pk));
    }

    return (
      <div   id={Pk} >
        <div className='card' onClick={onClick}>
        <img src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
        <p className="title" >{title}</p>
        <p>{author}</p>
        </div>
        <button type="submit" 
          onClick={()=>{algo(Pk)}}
          // style={{zIndex: "100"}}
        >cart</button>
        <button onClick={()=>{algo2(Pk)}} >remove</button>
        
      </div>
    )
  };