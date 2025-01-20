import { useMutation } from "@tanstack/react-query"
import { IMutationOptions } from "../Modal"
 import { orderService } from "../../../services/order.service";

export const KEY_CREATE_PRODUCT = 'orderClose'

export const useOrderClose = (options?: IMutationOptions<unknown, number>) => useMutation({
    mutationKey: [KEY_CREATE_PRODUCT],
    mutationFn: (data) => orderService.orderClose(data),
    ...options
});
