import { useMutation } from "@tanstack/react-query";
import { IMutationOptions } from "../Modal";
import ProductService from "../../../services/product.service";

export const KEY_EDIT_PRODUCT = 'editProduct'


export const useEditProduct = ( options?: IMutationOptions<unknown, FormData>) => useMutation({
    mutationKey: [KEY_EDIT_PRODUCT],
    mutationFn: (data) => ProductService.editProduct(data),
    ...options
});