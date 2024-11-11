import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Input/Input";
import ModalLayout from "../../components/ModalLayout/ModalLayout";
import { IProductForm } from "../../interfaces/productForm.interface";
import FormLayout from "../../components/FormLayout/FormLayout";

export default function AddProductModal() {

    const { register, handleSubmit } = useForm<IProductForm>();

    const addProductSubmit: SubmitHandler<IProductForm> = (data) => {
        console.log(data);
    }

    return (
        <ModalLayout>

            <FormLayout onSubmit={handleSubmit(addProductSubmit)} title="Добавление товара" button="Добавить">
                <Input title="Название" id="name" {...register('name', {
                    required: 'Заполните название'
                })} />
                <Input title="Описание" id="description" {...register('description', {
                    required: 'Заполните описание'
                })} />
                <Input title="Картинка" id="img" {...register('img', {
                    required: 'Заполните картинку'
                })} />
                <Input title="Цена" id="price" {...register('price', {
                    required: 'Заполните цену'
                })} />
            </FormLayout>
        </ModalLayout>
    )
}