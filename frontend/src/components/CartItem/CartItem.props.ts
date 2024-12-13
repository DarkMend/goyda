import { IProduct } from "../../interfaces/product.interface";

export interface ICartItem {
    product: IProduct,
    count: number
}