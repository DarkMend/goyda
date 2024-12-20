import { useQuery, useQueryClient } from "@tanstack/react-query";
import MainButton from "../../components/MainButton/MainButton";
import Title from "../../components/Title/Title";
import styles from "./Product.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../services/product.service";
import Loading from "../../components/Loading/Loading";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import EditButton from "../../components/EditButton/EditButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, store } from "../../store/store";
import { modalActions } from "../../store/modal.slice";
import EditProductModal from "./EditProductModal";
import { useDeleteProduct } from "../../utils/hooks/Product/useDeleteProduct";
import { IProduct } from "../../interfaces/product.interface";
import { selectUser, UserState } from "../../store/userSlice";
import cn from 'classnames'
import { useDeleteCart } from "../../utils/hooks/Cart/useDeleteCart";
import { useEffect } from "react";
import { useAddCart } from "../../utils/hooks/Cart/useAddCart";

export default function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const state = useSelector<UserState>(selectUser);
  const { user } = state as UserState;

  const { data, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => ProductService.getProduct(productId),
    select: (data) => data.data,
  });

  const { mutate } = useDeleteProduct({
    onSuccess() {
      navigate('/products');
    },
  });

  const { mutate: mutateCartDelete, isPending } = useDeleteCart();

  const deleteCart = (id: number) => {
    mutateCartDelete(id);
  }

  const { mutate: addCartItem, isPending: isPendingAdd } = useAddCart();

  const addCart = (id: number) => {
    addCartItem(id);
  }

  useEffect(() => {
    (isPending || isPendingAdd) ? '' : queryClient.invalidateQueries({ queryKey: ['user'] });
  }, [isPending, isPendingAdd])

  const openModal = () => {
    dispatch(modalActions.setIsActive(!store.getState().modal.isActive));
  };

  const deleteProduct = () => {
    mutate(productId as string)
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <EditProductModal data={data as IProduct} />
          <div className={styles["title-wrapper"]}>
            <Title>{data?.name}</Title>
            <div className={styles["admin-actions"]}>
              <DeleteButton onClick={deleteProduct} />
              <EditButton onClick={openModal} />
            </div>
          </div>
          <div className={styles["product"]}>
            <div className={styles["product-slider"]}>
              <div className={styles["product-img"]}>
                <img src={data?.img} alt="" />
              </div>
            </div>
            <div className={styles["product-info"]}>
              <div className={styles["title"]}>{data?.name}</div>
              <div className={styles["description"]}>{data?.description}</div>
              <div className={styles["price"]}>{data?.price} р.</div>
              {
                user ? user.cart?.find((el) => el.id == data?.id) ? <MainButton onClick={() => deleteCart(data?.id as number)} className={cn(styles["button"], styles["delete"])}>Удалить из корзины</MainButton> : <MainButton onClick={() => addCart(data?.id as number)} className={styles["button"]}>В корзину</MainButton> : <MainButton className={styles["button"]}>В корзину</MainButton>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}
