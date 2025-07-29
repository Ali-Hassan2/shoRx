import toast from "react-hot-toast";

const showSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    duration: 3000,
  });
};

const showError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    duration: 3000,
  });
};

const showInfo = (message: string) => {
  toast(message, {
    position: "top-right",
    duration: 3000,
  });
};

export { showSuccess, showError, showInfo };
