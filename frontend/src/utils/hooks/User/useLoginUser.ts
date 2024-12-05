import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../../services/user.service";
import { IMutationOptions } from "../Modal";
import { IUser } from "../../../interfaces/user.interface";

export const useLoginUser = (options?: IMutationOptions<unknown, IUser>) => useMutation({
    mutationKey: ['loginUser'],
    mutationFn: (data) => UserService.userLogin(data),
    ...options
})