import { API_ENDPOINTS } from "@/actions";

interface AdminType {
  success: boolean;
  message: string;
}

interface BodyType {
  email: string;
  password: string;
  data?: any;
  token: string;
}

const loginAdmin = async ({ body }: { body: BodyType }): Promise<AdminType> => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(API_ENDPOINTS.adminlogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal,
      body: JSON.stringify(body),
    });
    clearTimeout(timeout);
    if (!response.ok) {
      const error_Data = await response.json().catch(() => null);
      throw new Error(error_Data?.message || "Server error occurred.");
    }
    const data = await response.json();
    console.log("Received from backend:", data);
    return {
      success: data.success ?? false,
      message: data.message ?? "No message provided",
      data: data.data ?? {},
      token: data.token,
    };
  } catch (error: unknown) {
    clearTimeout(timeout);
    if (error.name === "AbortError") {
      return { success: false, message: " Request timed out. Try again." };
    }
    return {
      success: false,
      message: error.message ?? "Unknown error",
    };
  }
};

export { loginAdmin };
