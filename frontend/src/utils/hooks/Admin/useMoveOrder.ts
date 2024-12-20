import { useMutation } from "@tanstack/react-query"
import { IMutationOptions } from "../Modal"
 import { orderService } from "../../../services/order.service";

export const KEY_CREATE_PRODUCT = 'moveOrder'

export const useMoveOrder = (options?: IMutationOptions<unknown, number>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: (data) => orderService.moveOrder(data),
    ...options
});
