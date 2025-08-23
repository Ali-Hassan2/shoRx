import { API_ENDPOINTS } from "@/actions";

interface adminstatus {
  success: boolean;
  message: string;
}

const adminlogout = async (): Promise<adminstatus> => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timer = 3000;
  const timeout = setTimeout(() => controller.abort(), timer);
  try {
    const result = await fetch(API_ENDPOINTS.adminlogout, {
      method: "POST",
      credentials: "include",
    });
    clearTimeout(timeout);
    if (!result.ok) {
      const error_Data = await result.json().catch(() => null);
      throw new Error(error_Data?.message || "Server error occured.");
    }
    const data = await result.json();
    localStorage.removeItem("admintoken");
    localStorage.removeItem("admin-info");
    return {
      success: data.success ?? false,
      message: data.message,
    };
  } catch (error: unknown) {
    clearTimeout(timeout);
    if (error.name === "AbortError") {
      return {
        success: false,
        message: "Request timeout",
      };
      return {
        success: false,
        message: error?.message ?? "unknown error",
      };
    }
  }
};

export { adminlogout };
