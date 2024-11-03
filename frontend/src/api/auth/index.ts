import endPoints from "../endPoints";
import { axiosInstance } from "../instance";
import { ILoginRequest, ILoginResponse } from "./types";

export const login = (params: ILoginRequest) => axiosInstance.post(endPoints.auth.LOGIN, params)