import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivetRoute;