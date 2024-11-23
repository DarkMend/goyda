import { IProduct } from '../interfaces/product.interface'
import { axiosClassic } from '../api/interceptors'
// import { IProductForm } from '../interfaces/productForm.interface'


const ProductService = {
    async getProducts() {
        return axiosClassic.get<IProduct[]>(`/products`)
    },

    async getProduct(id: any) {
        return axiosClassic.get<IProduct>(`/products/${id}`)
    },
    
    async addProduct(data: FormData){
        return axiosClassic.post<unknown>('/products', data)
    }
}

export default ProductService;