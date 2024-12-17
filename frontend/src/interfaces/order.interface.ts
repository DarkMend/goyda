import { IProduct } from "./product.interface";

export interface IOrder{
    orderId: number,
    userId: number,
    amount: number,
    status: number,
    products: IProduct[]
}