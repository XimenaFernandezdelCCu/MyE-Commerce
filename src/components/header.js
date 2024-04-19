import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { handleLogout } from "../utils/utils";


export default function Header(){
    const cartLength = useSelector((state) => state.cart.length);
    const reduxAuth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const isAuthenticated = reduxAuth.auth;

    return (
        <header className="flex wrapp p3 justifyCenter">
            <h1 className="title" >MARKETFY</h1>

            <div className="flex justifyEvenly" style={{width:"80%"}} >
                <Link to='/' className="link" >Shop</Link>

                <div className="flex">
                    <Link to='/cart' className="link right" >Cart</Link>
                    {cartLength>0 && <div className="notification flex justifyCenter">{cartLength}</div>}
                </div>

                { isAuthenticated && !isNaN(reduxAuth.id) ?
                    <>
                    <Link to='/profile' className="link" >Profile</Link>
                    <a className="link" 
                    onClick={()=>handleLogout(dispatch)} 
                    >Logout</a>
                    </>
                :
                    <>
                    <Link to='/auth' className="link" >Login</Link>
                    </>
                }
            </div>
        </header>
    )
}