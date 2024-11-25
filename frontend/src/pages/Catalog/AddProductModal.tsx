import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import { IProductForm } from "../../interfaces/productForm.interface";
import FormLayout from "../../components/FormLayout/FormLayout";
import { useEffect, useState } from "react";
import { useCreateProduct } from "../../utils/hooks/Product/useCreateProduct";
import { useQueryClient } from "@tanstack/react-query";

export default function AddProductModal() {
  const [errorValue, setErrorValue] = useState<string | undefined>("");
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IProductForm>({
    mode: "onChange",
  });

  const { mutate, isPending } = useCreateProduct({
    onSuccess(){
      reset()
    },
    onError(error) {
        setErrorValue(error.response?.data?.message);
    },
  })

  const addProductSubmit: SubmitHandler<IProductForm> = (data) => {
    if(isPending) return

    const formData = new FormData();

    Object.entries(data).forEach(([el, value]) => el !== 'img' && formData.append(el, value));
    formData.append('img', data.img[0]);
    mutate(formData)
  };

  useEffect(() => {
    isPending ? '' : queryClient.invalidateQueries({queryKey: ['products']});
  }, [isPending])

  return (
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
        />
        <Input
          title="Описание"
          id="description"
          {...register("description", {
            required: "Заполните описание",
          })}
          errorActive={errors.description && errors.description.message}
        />
        <Input
          title="Картинка"
          id="img"
          type="file"
          {...register("img", {
            required: "Заполните картинку",
          })}
          errorActive={errors.img && errors.img.message}
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
            (errors.price && errors.price.message) || (errorValue && errorValue)
          }
        />
      </FormLayout>
    </ModalLayout>
  );
}
