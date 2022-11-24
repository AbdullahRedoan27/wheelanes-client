import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;