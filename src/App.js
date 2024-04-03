import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components:
import ContentWrap from "./components/contentWrap";
import Error from "./components/small/error";
import ProtectedRoute from "./components/small/protectedRoute";
import Land from './components/land';
import Home from './components/home';
import Profile from './components/profile';
import Cart from './components/cart';
import ProductDetails from "./components/productDetails";
// Style
import "./style/generalStyle.css"

const router = createBrowserRouter(
  [
    {path: '/', element: <ContentWrap/>, 
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Land/>},
      {path: '/home', element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path: '/profile', element: <ProtectedRoute><Profile/></ProtectedRoute> },
      {path: '/cart', element: <ProtectedRoute><Cart/></ProtectedRoute> },
      {path: '/products/:id', element: <ProtectedRoute><ProductDetails/></ProtectedRoute> }
    ]}
  ]
);

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;