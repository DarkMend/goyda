import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import { IProductForm } from "../../interfaces/productForm.interface";
import FormLayout from "../../components/FormLayout/FormLayout";
import { useEffect, useState } from "react";
import { useEditProduct } from "../../utils/hooks/Product/useEditProduct";
import { useQueryClient } from "@tanstack/react-query";
import InputImage from "../../components/InputImage/InputImage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toaster from "../../components/Toaster/Toaster";
import { useParams } from "react-router-dom";
import { IProduct } from "../../interfaces/product.interface";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal.slice";
import { store } from "../../store/store";

export interface IEditProductModalProps {
  data: IProduct
}

export default function EditProductModal({ data }: IEditProductModalProps) {
  const [activeInput, setActiveInput] = useState(false);
  const queryClient = useQueryClient();
  const { productId } = useParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProductForm>({
    mode: "onChange",
  });

  const errorToast = (data: string | undefined) => {
    toast.error(data, {
      autoClose: false,
    });
  };

  const { mutate, isPending } = useEditProduct({
    onSuccess() {
      setActiveInput((state) => !state);
      reset();
      toast.success("Успешно", {
        autoClose: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError(error) {
      errorToast(error.response?.data?.message);
    },
  });

  const addProductSubmit: SubmitHandler<IProductForm> = (data) => {
    if (isPending) return;

    const formData = new FormData();

    Object.entries(data).forEach(
      ([el, value]) => el !== "img" && formData.append(el, value)
    );

    if (data.img.length == 0) {
      formData.append("img", "");
    } else {
      formData.append('img', data.img[0]);
    }

    formData.append("id", productId as string);
    mutate(formData);
  };

  useEffect(() => {
    reset({
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category
    })
    setActiveInput(true);
    dispatch(modalActions.setIsActive(!store.getState().modal.isActive))
  }, [data])

  return (
    <>
      <Toaster />
      <ModalLayout>
        <FormLayout
          onSubmit={handleSubmit(addProductSubmit)}
          title="Редактирование товара"
          button="Добавить"
          disabled={isPending}
        >
          <Input
            title="Название"
            id="name"
            {...register("name", {
              required: "Заполните название",
            })}
            errorActive={errors.name && errors.name.message}
            activeInput={activeInput}
          />
          <Input
            title="Описание"
            id="description"
            {...register("description", {
              required: "Заполните описание",
            })}
            errorActive={errors.description && errors.description.message}
            activeInput={activeInput}
          />
          <InputImage
            id="img"
            {...register("img")}
            errorMessage={errors.img && errors.img.message}
            activeInput={activeInput}
          />
          <Input
            title="Цена"
            id="price"
            type="number"
            {...register("price", {
              required: "Заполните цену",
              valueAsNumber: true,
            })}
            errorActive={errors.price && errors.price.message}
            activeInput={activeInput}
          />
          <select {
            ...register('category')
          }
           defaultValue={data.category}  style={{ display: 'flex', width: '100%', padding: '15px', borderRadius: '10px', border: '2px solid black' }}>
            <option value="1">Стратегии</option>
            <option value="2">Карточные</option>
            <option value="3">Классические</option>
          </select>
        </FormLayout>
      </ModalLayout>
    </>
  );
}
