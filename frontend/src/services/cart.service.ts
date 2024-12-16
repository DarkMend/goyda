import { axiosWithAuth } from "../api/interceptors"
import { ICartCount } from "../components/CartItem/CartItem";

export const cartService = {
    async getCart(){
        return axiosWithAuth.get('/cart')
    },

    async deleteCartItem(data: number){
        return axiosWithAuth.delete(`/cart/${data}`)
    },

    async addCartItem(data: number){
        return axiosWithAuth.post(`/cart/add-product/${data}`);
    },

    async updateCartCount(data: ICartCount){
        return axiosWithAuth.post(`/cart/count-update/${data.id}`, {
            count: data.count
        }); 
    },
}