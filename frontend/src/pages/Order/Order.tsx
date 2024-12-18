import { Link, useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from "./Order.module.css";
import { useQuery } from "@tanstack/react-query";
import { orderService } from "../../services/order.service";
import { IProduct } from "../../interfaces/product.interface";

export default function Order() {
  const { orderId } = useParams();
  const id = orderId as unknown as number;

  const { data } = useQuery({
    queryKey: ["cartItem"],
    queryFn: () => orderService.getOrder(id as number),
    select: (data) => data?.data?.data,
  });

  console.log(data);

  return (
    <>
      <Title>Заказ: {data?.orderId}</Title>
      <div className={styles["order__wrapper"]}>
        <h3>Товары</h3>
        <div className={styles["order__items"]}>
          {data &&
            data.products.map((el: IProduct) => (
              <Link key={el.id} to={`/products/${el.id}`} className={styles["order__item"]}>
                <div className={styles["img"]}>
                  <img
                    src={el.img}
                    alt=""
                  />
                </div>
                <p>{el.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
