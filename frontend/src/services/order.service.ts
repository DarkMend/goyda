import { axiosWithAuth } from "../api/interceptors"

export const orderService = {   
    async getOrders(){
        return axiosWithAuth.get('/orders');
    },

    async addOrder() {
        return axiosWithAuth.post('/orders');
    },

    async getOrder(id:number){
        return axiosWithAuth.get(`/orders/${id}`)
    },

    async moveOrder(id:number){
        return axiosWithAuth.post(`/orders/move-status/${id}`)
    },
    
    async orderClose(id:number){
        return axiosWithAuth.post(`/orders/close-order/${id}`);
    }
}