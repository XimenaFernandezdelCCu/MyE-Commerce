import { useSelector, useDispatch } from "react-redux";
import { addItem2Cart, removeItemFromCart } from "../../utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { wishActions } from "../../store";
import mockData from '../../mockData/items.json'
import Add2CartBtn from "./add2CartBtn";

export default function CardWish({title,author, onClick, Pk, setData}) {
  // ------------redux
  const dispatch = useDispatch();
  const wish = useSelector((state) => state.wish);
  console.log("wish: ", wish);

    //simulate fetching from DB
    const filtered = mockData.filter((item)=> 
        wish.some(id => id == item.pk ) );
    console.log("--- fetched data: ", filtered);

  function handleDelWish (){
    dispatch(wishActions.removeFromWishlist(Pk));
    console.log("removed", Pk);
    setData(filtered);
  }
  
    return (
      <div id={Pk} className='card'
        style={{
          width:"100%", 
          display:"flex", 
          flexDirection: "column"
        }}>
        <button 
          id="circular"
          onClick={handleDelWish}
          ><FontAwesomeIcon icon={faTrash} size={"xs"} /></button>

        <div className="flex" style={{justifyContent:" space-evenly"}}>
          <FontAwesomeIcon icon={faBookOpen} />
          <div  onClick={onClick}>
            
            {/* <img src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img> */}
            <p className="title" >{title}</p>
            <p>{author}</p>
          </div>
          
          {/* <button type="submit" className="pill"
            onClick={()=>{addItem2Cart(dispatch, Pk)}}
            // style={{zIndex: "100"}}
          ><FontAwesomeIcon icon={faCartPlus} /></button> */}
          aaaa
          <Add2CartBtn></Add2CartBtn>
          {/* <button onClick={()=>{removeItemFromCart(dispatch, Pk)}} >remove</button> */}
        </div>

      </div>
    )
  };