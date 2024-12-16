import { useMutation } from "@tanstack/react-query"
import { IMutationOptions } from "../Modal"
import { cartService } from "../../../services/cart.service";
import { ICartCount } from "../../../components/CartItem/CartItem";

export const KEY_CREATE_PRODUCT = 'updateCartCount'

export const useUpdateCartCount = (options?: IMutationOptions<unknown, ICartCount>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: (data) => cartService.updateCartCount(data),
    ...options
});
