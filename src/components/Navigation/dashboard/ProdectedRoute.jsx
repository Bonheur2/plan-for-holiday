import React from 'react'
import { Navigate } from 'react-router-dom';

function ProdectedRoute({children}) {
    let UserData = JSON.parse(localStorage.getItem("data"));
    let token = UserData?.access_token;
    let user = UserData?.user?.role;
    if (user === "admin") {
        return (children);
    }
    else {
        return <Navigate to="/" />
    }
}
export default ProdectedRoute