import { axiosClassic } from "../api/interceptors";
import { IUser } from "../interfaces/user.interface";

export const UserService = {
    async userCreate (data: IUser){
        return axiosClassic.post<unknown>('/auth/reg', data)
    }
}