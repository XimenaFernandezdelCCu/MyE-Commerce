import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components:
import ContentWrap from "./components/contentWrap";
import Error from "./components/small/error";
import ProtectedRoute from "./components/small/protectedRoute";
import Land from './components/land';
import Home from './components/home';
import Profile from './components/profile';
import Sales from "./components/sales";
// import Cart from './components/cart';
import ProductDetails from "./components/productDetails";
// Style
import "./style/index.css"

const router = createBrowserRouter(
  [
    {path: '/', element: <ContentWrap/>, 
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      // {path:'/products/:id', element:<ProductView/>},
      // {path: '/auth', element: <Land/>
      //   // ,children: [
      //   //   {path: '/auth/', element: <LoginForm/>},
      //   //   {path: '/auth/signup', element:<SignupForm/> },
      //   //   {path: '/auth/extraDetails', element:<ExtraDetailsForm/> }
      //   // ]
      // },
      {path: '/cart', element: <Sales/> },
      // {path: '/profile', element: <ProtectedRoute><Profile/></ProtectedRoute>,
      // // children: [
      // //   {path: '/profile/', element: <ProfileDetails/>},
      // //   {path: '/profile/edit', element:<ProfileEdit/>},
      // //   {path: '/profile/wishlist', element:<ProfileWishlist/> },
      // //   {path: '/profile/orders', element:<ProfileOrders/> },
      // // ]
      // },
    ]}
  ]
);

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;