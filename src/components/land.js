//components
import Auth from './small/auth'
import ValidationProvider from '../context/ValidationProvider';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Land() {
  console.log("land")
  const reduxAuth = useSelector((state)=>state.auth.auth);
  const isAuthenticated = reduxAuth;

  return (
    <>
    {isAuthenticated ? 
      <Navigate to="/home" replace />
    :
      <div className='land' >
        <div className='P3 flex'>
          <h1 className='title' style={{fontSize:"6vw"}}>MARKETFY</h1>
          <h4>Your favorite shopping place</h4>
        </div>
        <ValidationProvider>
          <Auth></Auth>
        </ValidationProvider>
        

      </div>
    }
    </>
  );
};