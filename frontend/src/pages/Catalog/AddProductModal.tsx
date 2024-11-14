import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import { IProductForm } from "../../interfaces/productForm.interface";
import FormLayout from "../../components/FormLayout/FormLayout";
import { useMutation } from "@tanstack/react-query";
import ProductService from "../../services/product.service";

export default function AddProductModal() {

    const { register, handleSubmit, formState: { errors } } = useForm<IProductForm>({
        mode: 'onChange',
    });

    const { mutate } = useMutation({
        mutationKey: ['add product'],
        mutationFn: async (data: IProductForm) => ProductService.addProduct(data),
    })

    const addProductSubmit: SubmitHandler<IProductForm> = (data) => {
        mutate(data);
    }

    return (
        <ModalLayout>
            <FormLayout onSubmit={handleSubmit(addProductSubmit)} title="Добавление товара" button="Добавить">
                <Input title="Название" id="name" {...register('name', {
                    required: 'Заполните название'
                })} errorActive={errors.name && errors.name.message} />
                <Input title="Описание" id="description" {...register('description', {
                    required: 'Заполните описание'
                })} errorActive={errors.description && errors.description.message} />
                <Input title="Картинка" id="img" {...register('img', {
                    required: 'Заполните картинку'
                })} errorActive={errors.img && errors.img.message} />
                <Input title="Цена" id="price" {...register('price', {
                    required: 'Заполните цену'
                })} errorActive={errors.price && errors.price.message} />
            </FormLayout>
        </ModalLayout>
    )
}