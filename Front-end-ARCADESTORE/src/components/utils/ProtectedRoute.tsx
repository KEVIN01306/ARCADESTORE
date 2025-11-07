import type React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

interface ProtectedRouteProps{
    children: React.ReactNode;
    allowedRoles: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const user = useAuthStore.getState().user

    if (!user?.role) return <Navigate to={'/public/auth/login'} replace />

    if (!allowedRoles.includes(user.role)) return <Navigate to={'/public/auth/login'} replace/>

    return children;

}


export default ProtectedRoute;