import { IProduct, IProducts } from '../interfaces/product.interface'
import { axiosClassic } from '../api/interceptors'

const ProductService = {
    async getProducts() {
        return axiosClassic.get<IProducts>(`/products`)
    },

    async getProduct(id: any) {
        return axiosClassic.get<IProduct>(`/products/${id}`)
    },

    async addProduct(data: FormData) {
        return axiosClassic.post<unknown>('/products', data)
    },
    async editProduct(data: FormData) {
        return axiosClassic.post<unknown>(`/products/${data.get('id')}`, data)
    }
}

export default ProductService;