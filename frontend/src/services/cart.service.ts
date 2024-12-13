import { axiosWithAuth } from "../api/interceptors"

export const cartService = {
    async getCart(){
        return axiosWithAuth.get('/cart')
    },

    // async deleteCartItem(){
    //     return axiosWithAuth.post('/cart/')
    // }
}