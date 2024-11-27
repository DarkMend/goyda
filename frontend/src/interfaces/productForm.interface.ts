export interface IProductForm{
    name: string,
    description: string,
    img: FileList,
    price: number
}

export interface IProductFormFormData extends FormData {
    id?: number
}