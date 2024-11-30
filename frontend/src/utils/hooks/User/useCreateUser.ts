import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../../services/user.service";
import { IMutationOptions } from "../Modal";
import { IUser } from "../../../interfaces/user.interface";

export const useCreateUser = (options?: IMutationOptions<unknown, IUser>) => useMutation({
    mutationKey: ['createUser'],
    mutationFn: (data) => UserService.userCreate(data),
    ...options
})