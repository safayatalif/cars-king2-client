import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthProvider';
import {useLocation} from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation()
    if (loading) {
        return <button className="btn loading">loading</button>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;