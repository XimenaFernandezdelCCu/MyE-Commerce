import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

export default function ProtectedRoute(props) {
  const isAuthenticated = useSelector(state => state.auth.auth);
  console.log("auth? ", isAuthenticated)

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
