import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { ReactNode, useEffect } from "react";
import { axiosWithAuth } from "../api/interceptors";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import Loading from "../components/Loading/Loading";
// import { RootState } from "../store/store";

type Children = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Children) => {
  const dispatch = useDispatch();
  // const state = useSelector<RootState>(state => state.user);

  const token = Cookies.get("access_token");

  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => axiosWithAuth.get("/me"),
    enabled: !!token,
  });

  useEffect(() => {
    if (user) {
      dispatch(setUser(user?.data));
    }
  }, [user, dispatch]);

  return <div>{
    isLoading ? <Loading /> : children
  }</div>;
};
