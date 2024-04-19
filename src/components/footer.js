import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { handleLogout } from "../utils/utils";

function Footer() {
    const reduxAuth = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();
    const isAuthenticated = reduxAuth;

    return (
        <footer className="p3">

            <h1 className="title" >MARKETFY</h1>

            <div className="flex justifyEvenly">
                <Link to='/' className="link" >Shop</Link>
                <Link to='/cart' className="link" >Cart</Link>

                {isAuthenticated && !isNaN(reduxAuth.id) ?
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

            <div>
                <p>&copy; {new Date().getFullYear()} Marketfy Bookstore. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;