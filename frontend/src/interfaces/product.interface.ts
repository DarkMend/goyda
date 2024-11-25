export interface IProduct {
    id: number,
    name: string,
    description: string,
    img: string,
    price: number
}

type WithData<T> = { data: T}

export type IProducts = WithData<IProduct[]>