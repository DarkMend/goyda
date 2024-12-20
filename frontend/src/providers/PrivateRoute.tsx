import { ReactNode } from "react";
// import { useSelector } from "react-redux";
// import { selectUser, UserState } from "../store/userSlice";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRoute({children}: {children: ReactNode}) {

    // const state = useSelector<UserState>(selectUser);
    // const user = state as UserState;

    // console.log(!user.isAuth)

    const token = Cookies.get('access_token');

    if(!token){
        return <Navigate to={'/auth/login'}/>
    }

    return (
        <div>
            {children}
        </div>
    )
}