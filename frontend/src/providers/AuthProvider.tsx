import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ReactNode } from "react";
import { axiosWithAuth } from "../api/interceptors";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

type Children = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Children) => {
  const dispatch = useDispatch();

  const token = Cookies.get("access_token");

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => axiosWithAuth.get("/me"),
    enabled: !!token,
  });

  if (user) {
    dispatch(setUser(user?.data));
  }

  return <div>{children}</div>;
};
