import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Land from './components/land';
import Home from './components/home';
import Profile from './components/profile';
import Cart from './components/cart';
import Checkout from './components/checkout';
import ProtectedRoute from "./components/small/protectedRoute";
import ContentWrap from "./components/contentWrap";
import "./style/generalStyle.css"

const router = createBrowserRouter(
  [
    {path: '/', element: <ContentWrap/>, children: [
      {path: '/', element: <Land/>},
      {path: '/home', element: <ProtectedRoute><Home/></ProtectedRoute>},
      {path: '/profile', element: <ProtectedRoute><Profile/></ProtectedRoute> },
      {path: '/cart', element: <ProtectedRoute><Cart/></ProtectedRoute> },
    ]}
  ]
);

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;