import { toast } from 'react-toastify';

export function alert (message) {
  return toast(message, {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "error"
  });
}