import { Dispatch } from "@reduxjs/toolkit";
import api from '../../api'
import { ILoginRequest } from "../../api/auth/types";
import { loginStart, loginSuccess, loginFailure } from "./authReducer";

export const loginUser = (data: ILoginRequest) => 
    async(dispatch: Dispatch) => {
        try{
            dispatch(loginStart())

            const res = await api.auth.login(data)
            dispatch(loginSuccess(res.data.accessToken))
        } catch(e: any) {
            console.error(e)
            dispatch(loginFailure(e.message))
        }
   }
