// import { useParams, Link } from "react-router-dom";
// import allItems from '../mockData/items.json'
// import { handleAdd2Wishlist, addItem2Cart } from "../utils";
// import { useDispatch, useSelector } from "react-redux";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faCartPlus, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


// export default function ProductDetails(){
//     const {id} = useParams();
//     const product = allItems.find((item)=>item.pk == id);
//     console.log("product; ", product)
//     const dispatch = useDispatch();
//     const userDetails = useSelector((state) => state.auth.userDetails);

//     const linkStyle ={
//         color: "white", 
//         textDecoration: "none", 
//         fontWeight: "bolder", 
//         // "&:hover": {
//         //   color: "#cc8245"
//         // }
//       }
//     return (
//         <div className='modalcontent' >
//             <div className='modalinfo' >
                
//                 <div className='modala'>
//                     <button className="pill" > <FontAwesomeIcon icon={faArrowLeft} /><Link to='/home' style={linkStyle}>Shop</Link></button>
//                     <img className='modalimg' src="https://i.pinimg.com/564x/f2/bb/6c/f2bb6c4da29b8f45b6a1773816382972.jpg" ></img>
//                     <h3>{product.price} $</h3>
                    
//                 </div>
//                 <div className='modalb'>
//                     <h1>{product.title}</h1>
//                     <h3>{product.author}</h3>
//                     <p>{product.synapsis}</p>
//                     <h2>Current stock: {product.stock}</h2>
//                     <ul>
//                         <h3>Hardcover</h3>
//                         <h3>November 14, 1998</h3>
//                         <h3>756 Pages</h3>
//                         <h3>Enlgish</h3>
//                         <h3>Penguin Editorials</h3>
//                     </ul>

                    

//                 </div>
//             </div>

//             <div className='modalbtns' >
//                 <button 
//                 className="green pill" 
//                 onClick={()=>handleAdd2Wishlist(dispatch, product[1].pk, userDetails.mail)}
//                 > <FontAwesomeIcon icon={faHeart} className="children" />
//                     Wish</button>

//                 <button 
//                 type="submit" 
//                 className="pill"
//                 onClick={()=>{addItem2Cart(dispatch, product[1].pk,  userDetails.mail)}}
//                     // style={{zIndex: "100"}}
//                 ><FontAwesomeIcon icon={faCartPlus} /></button>


//             </div>

//         </div>
//     )
// }