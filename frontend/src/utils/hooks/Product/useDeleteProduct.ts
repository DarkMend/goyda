import { useMutation } from "@tanstack/react-query";
import { IMutationOptions } from "../Modal";
import ProductService from "../../../services/product.service";

export const KEY_DELETE_PRODUCT = 'deleteProduct'


export const useDeleteProduct = ( options?: IMutationOptions<unknown, string>) => useMutation({
    mutationKey: [KEY_DELETE_PRODUCT],
    mutationFn: (data) => ProductService.deleteProduct(data),
    ...options
});