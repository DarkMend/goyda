import { useMutation } from "@tanstack/react-query"
import ProductService from "../../../services/product.service"
import { IMutationOptions } from "../Modal"

export const KEY_CREATE_PRODUCT = 'addProduct'
export const KEY_EDIT_PRODUCT = 'editProduct'

export const useCreateProduct = (options?: IMutationOptions<unknown, FormData>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: (data) => ProductService.addProduct(data),
    ...options
});

export const useEditProduct = ( options?: IMutationOptions<unknown, FormData>) => useMutation({
    mutationKey: [KEY_EDIT_PRODUCT],
    mutationFn: (data) => ProductService.editProduct(data),
    ...options
})