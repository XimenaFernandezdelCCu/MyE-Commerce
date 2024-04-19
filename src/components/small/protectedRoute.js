import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ProtectedRoute(props) {

  const reduxAuth = useSelector((state)=>state.auth);
  const isAuthenticated = reduxAuth.auth;

  return (
    // <Route {...rest} render={(props) => (
    //   isAuthenticated
    //     ? <Component {...props} />
    //     : <Navigate to="/land" />
    // )} />
    <>
    {isAuthenticated && !isNaN(reduxAuth.id)   ?
        <>{props.children}</>
    : 
        <Navigate to="/" replace />
    }
    </>

  );
};
