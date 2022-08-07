import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebase.init'

export default function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!user) {
        return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    }
    return children
}
