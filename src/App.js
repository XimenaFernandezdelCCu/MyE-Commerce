import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Land from './components/land';
import Home from './components/home';
import Profile from './components/profile';
import Cart from './components/cart';
import Checkout from './components/checkout';
import ContentWrap from "./components/contentWrap";
import "./style/generalStyle.css"

const router = createBrowserRouter(
  [{path: '/', element: <ContentWrap><Land/></ContentWrap> },
   {path: '/home', element: <ContentWrap><Home/></ContentWrap> },
   {path: '/profile', element: <ContentWrap><Profile/></ContentWrap> },
   {path: '/cart', element: <ContentWrap><Cart/></ContentWrap> },
   {path: '/checkout', element:<ContentWrap><Checkout/></ContentWrap> },
  //  {path: '/orders', element:<ContentWrap></ContentWrap> <Home/>},
  //  {path: '/wishlist', element:<ContentWrap></ContentWrap> <Home/>},
  //  {path: '/other', element: <ContentWrap></ContentWrap> <Home/>},
  ]
);

function App() {
    const headerloggedLinks = ["About Us", "Contact", "Profile", "Cart", "Logout"];
    const section = "home"

  return (
    <RouterProvider router={router}/>
  );
}

export default App;