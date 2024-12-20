import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import { IProductForm } from "../../interfaces/productForm.interface";
import FormLayout from "../../components/FormLayout/FormLayout";
import { useState } from "react";
import { useCreateProduct } from "../../utils/hooks/Product/useCreateProduct";
import { useQueryClient } from "@tanstack/react-query";
import InputImage from "../../components/InputImage/InputImage";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Toaster from "../../components/Toaster/Toaster";

export default function AddProductModal() {
  const [activeInput, setActiveInput] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IProductForm>({
    mode: "onChange",
  });

  const errorToast = (data: string | undefined) => {
    toast.error(data, {
      autoClose: false
    })
  }

  const { mutate, isPending } = useCreateProduct({
    onSuccess() {
      setActiveInput(false);
      reset();
      toast.success('Успешно', {
        autoClose: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError(error) {
      errorToast(error.response?.data?.message)
    },
  })

  const addProductSubmit: SubmitHandler<IProductForm> = (data) => {
    if (isPending) return

    const formData = new FormData();

    Object.entries(data).forEach(([el, value]) => el !== 'img' && formData.append(el, value));
    formData.append('img', data.img[0]);
    setActiveInput(true);
    mutate(formData);
  };

  return (
    <>
      <Toaster />
      <ModalLayout>
        <FormLayout
          onSubmit={handleSubmit(addProductSubmit)}
          title="Добавление товара"
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
            {...register('img', {
              required: 'Выберите изображение'
            })}
            errorMessage={errors.img && errors.img.message}
            activeInput={activeInput}
          />
          <Input
            title="Цена"
            id="price"
            type="number"
            {...register("price", {
              required: "Заполните цену",
              valueAsNumber: true
            })}
            errorActive={
              (errors.price && errors.price.message)
            }
            activeInput={activeInput}

          />
        </FormLayout>
      </ModalLayout>
    </>
  );
}
