import { ToastContainer } from "react-toastify";

export default function Toaster() {
    return (
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        />
    )
}