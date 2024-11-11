import { CirclePlus } from "lucide-react";
import IconButtonLayout from "../IconButtonLayout/IconButtonLayout";

export default function AddButton({...props}) {
    return (
        <IconButtonLayout {...props}>
            <CirclePlus style={{
                color: '#2D2D36',
                width: '25px',
                height: '25px'
            }} />
        </IconButtonLayout>
    )
}