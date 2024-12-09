import { createAsyncThunk } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { axiosWithAuth } from "./interceptors";

export interface ResponseUser {
    user: {
        email: string,
        name: string,
        id: number,
    }
}

export const checkAuth = createAsyncThunk('/auth/token', async () => {
    const token = Cookies.get('access_token');

    if (!token) return null

    const { data } = useQuery({
        queryKey: ['token'],
        queryFn: () => axiosWithAuth.get<ResponseUser>('/token')
    })

    return data?.data
})