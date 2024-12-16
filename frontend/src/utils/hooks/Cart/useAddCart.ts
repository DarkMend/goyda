import { useMutation } from "@tanstack/react-query"
import { IMutationOptions } from "../Modal"
import { cartService } from "../../../services/cart.service";

export const KEY_CREATE_PRODUCT = 'addCart'

export const useAddCart = (options?: IMutationOptions<unknown, number>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: (data) => cartService.addCartItem(data),
    ...options
});
