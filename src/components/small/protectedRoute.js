import { Navigate, Route } from 'react-router-dom';
import { getLocalInfo } from '../../utils';
import { useSelector } from 'react-redux';

export default function ProtectedRoute(props) {

  const reduxAuth = useSelector((state)=>state.auth.auth);
  const isAuthenticated = reduxAuth;

  return (
    // <Route {...rest} render={(props) => (
    //   isAuthenticated
    //     ? <Component {...props} />
    //     : <Navigate to="/land" />
    // )} />
    <>
    {isAuthenticated ?
        <>{props.children}</>
    : 
        <Navigate to="/" replace />
    }
    </>

  );
};
