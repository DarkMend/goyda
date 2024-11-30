import { useQuery } from "@tanstack/react-query";
import MainButton from "../../components/MainButton/MainButton";
import Title from "../../components/Title/Title";
import styles from "./Product.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../../services/product.service";
import Loading from "../../components/Loading/Loading";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import EditButton from "../../components/EditButton/EditButton";
import { useDispatch } from "react-redux";
import { AppDispatch, store } from "../../store/store";
import { modalActions } from "../../store/modal.slice";
import EditProductModal from "./EditProductModal";
import { useDeleteProduct } from "../../utils/hooks/Product/useDeleteProduct";
import { IProduct } from "../../interfaces/product.interface";

export default function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

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
          <EditProductModal data={data as IProduct}/>
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
              <MainButton className={styles["button"]}>В корзину</MainButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
