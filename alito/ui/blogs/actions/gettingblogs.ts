import { API_ENDPOINTS } from "@/actions";

type fetchingBlogsTypes = {
  success: boolean;
  message: true;
  data?: unknown;
};

const fetchingBlogs = async (): Promise<fetchingBlogsTypes> => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timer = 15000;
  const timeout = setTimeout(() => controller.abort, timer);
  try {
    const response = await fetch(API_ENDPOINTS.getBlogs, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: signal,
    });
    clearTimeout(timeout);
    if (!response.ok) {
      const error_Data = await response.json().catch(() => null);
      throw new Error(error_Data?.message ?? "SOrry cannot get the blogs.");
    }

    const data = await response.json();
    if (typeof data === "object" && data !== null) {
      return data as fetchingBlogsTypes;
    }
    return { success: false, message: "Invalid response" };
  } catch (error: unknown) {
    clearTimeout(timeout);
    if (
      typeof error === "object" &&
      error !== null &&
      "name" in error &&
      (error as { name?: unknown }).name === "AbortError"
    ) {
      return { success: false, message: "Request Timeout" };
    }
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string"
    ) {
      return {
        success: false,
        message: (error as { message: string }).message,
      };
    }
    return { success: false, message: "Unexpected Error" };
  }
};

export { fetchingBlogs };
