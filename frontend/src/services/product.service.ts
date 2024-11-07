import axios from 'axios'
import { IProduct } from '../interfaces/product.interface'

const URL = 'http://127.0.0.1:8000/api';

const ProductService = {
    async getProducts() {
        return axios.get<IProduct[]>(`${URL}/products`)
    },

    async getProduct(id:any) {
        return axios.get<IProduct>(`${URL}/products/${id}`)
    }
}

export default ProductService;