import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components:
import ContentWrap from "./components/contentWrap";
import Error from "./components/small/error";
import Home from './components/home';
import Auth from "./components/auth";
import LoginForm from "./components/small/loginForm";
import SignupForm from "./components/small/signupForm";
import Sales from "./components/sales";
import ProtectedRoute from "./components/small/protectedRoute";
import Profile from './components/profile';
import ProfileDetails from "./components/small/profileDetails";
import ProfileEdit from "./components/small/profileEdit";
import ProfileWishlist from "./components/small/profileWishlist";
import ProfileOrders from "./components/small/profileOrders";
// Style
import "./style/index.css"

const router = createBrowserRouter(
  [
    {path: '/', element: <ContentWrap/>, 
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      // {path:'/products/:id', element:<ProductView/>},
      {path: '/auth', element: <Auth/>,
        children: [
          {path: '/auth/', element: <LoginForm/>},
          {path: '/auth/signup', element:<SignupForm/> }
        ]
      },
      {path: '/cart', element: <Sales/> },
      {path: '/profile', element: <ProtectedRoute><Profile/></ProtectedRoute>,
      children: [
        {path: '/profile/', element: <ProfileDetails/>},
        {path: '/profile/edit', element:<ProfileEdit/>},
        {path: '/profile/wishlist', element:<ProfileWishlist/> },
        {path: '/profile/orders', element:<ProfileOrders/> },
      ]
      },
    ]}
  ]
);

function App() {

  //Create space in local storage 
  if(!localStorage.getItem("Marketfy_ActiveUser")){
    localStorage.setItem("Marketfy_ActiveUser", false);
  } 

  if(!localStorage.getItem("Users_Marketfy")){
    localStorage.setItem("Users_Marketfy", JSON.stringify(1));
    const userLog = {
      pk: 1, 
      email: "xim@mail.com", 
      password: "a"
    }
    const userExtra = {
      first: "xime", 
      last: "cu"
    }
    localStorage.setItem("1_Log", JSON.stringify(userLog));
    localStorage.setItem("1_Extra", JSON.stringify(userExtra));

  }
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;