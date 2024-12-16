import { useMutation } from "@tanstack/react-query"
import { IMutationOptions } from "../Modal"
import { cartService } from "../../../services/cart.service";

export const KEY_CREATE_PRODUCT = 'deleteCart'

export const useDeleteCart = (options?: IMutationOptions<unknown, number>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: (data) => cartService.deleteCartItem(data),
    ...options
});
