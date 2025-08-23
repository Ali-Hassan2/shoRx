import { API_ENDPOINTS } from "@/actions";

interface AdminStatus {
  success: boolean;
  message: string;
}

const adminlogout = async (): Promise<AdminStatus> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const result = await fetch(API_ENDPOINTS.adminlogout, {
      method: "POST",
      credentials: "include",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!result.ok) {
      const errorData = await result.json().catch(() => null);
      throw new Error(errorData?.message || "Server error occurred.");
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
      return { success: false, message: "Request timeout" };
    }

    return { success: false, message: error?.message ?? "Unknown error" };
  }
};

export { adminlogout };
