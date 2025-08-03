import toast from "react-hot-toast";

const showSuccess = (message: string): void => {
  toast.success(message, {
    position: "top-right",
    duration: 3000,
  });
};

const showError = (message: string): void => {
  toast.error(message, {
    position: "top-right",
    duration: 3000,
  });
};

const showInfo = (message: string): void => {
  toast(message, {
    position: "top-right",
    duration: 3000,
  });
};

export { showSuccess, showError, showInfo };
