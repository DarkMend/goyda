import { Pencil } from "lucide-react";
import IconButtonLayout from "../IconButtonLayout/IconButtonLayout";

export default function EditButton() {
    return (
        <IconButtonLayout>
            <Pencil style={{
                color: '#2D2D36',
                width: '20px',
                height: '20px'
            }}/>
        </IconButtonLayout>
    )
}