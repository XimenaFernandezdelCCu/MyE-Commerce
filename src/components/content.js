import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Land from './land';
import Home from './home';
import Profile from './profile';
import Cart from './cart';
import Checkout from './checkout';
import Header from './header'

const router = createBrowserRouter(
  [{path: '/', element: <Land/>},
   {path: '/home', element: <Home/>},
   {path: '/profile', element: <Profile/>},
   {path: '/cart', element: <Cart/>},
   {path: '/checkout', element: <Checkout/>},
   {path: '/orders', element: <Home/>},
   {path: '/wishlist', element: <Home/>},
   {path: '/other', element: <Home/>},]
);


export default function Content() {

  return (
    <div className="content">
    <RouterProvider router={router}/>
    </div>
  );
}
