import { axiosWithAuth } from "../api/interceptors"

export const orderService = {
    async getOrders(){
        return axiosWithAuth.get('/orders');
    },

    async addOrder() {
        return axiosWithAuth.post('/orders');
    }
}