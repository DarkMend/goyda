import { useMutation } from "@tanstack/react-query"
import { IMutationOptions } from "../Modal"
import { orderService } from "../../../services/order.service";

export const KEY_CREATE_PRODUCT = 'addOrder'

export const useAddOrder = (options?: IMutationOptions<unknown, null>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: () => orderService.addOrder(),
    ...options
});
