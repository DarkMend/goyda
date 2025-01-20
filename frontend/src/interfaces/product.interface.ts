export interface IProduct {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number,
    category: number
}

type WithData<T> = { data: T }

export type IProducts = WithData<IProduct[]>

export interface IDeleteProductData {
    id: Pick<IProduct, 'id'>
}