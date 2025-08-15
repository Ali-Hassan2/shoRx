import { API_ENDPOINTS } from "@/actions";
import { time } from "console";

interface resultface {
  success: boolean;
  message: string | boolean;
  data?: unknown;
}

interface Props {
  id: string;
}

const fetchBlog = async ({ id }: Props): resultface => {
  const controller = new AbortController();
  const signal = controller.signal;

  const timer = 3000;
  const timeout = setTimeout(() => {
    controller.abort();
  }, timer);

  try {
    const response = await fetch(`API_ENDPOINTS.getsingleBlog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
      signal,
    });
    clearTimeout(timeout);
    if (!response.ok) {
      const error_Data = await response.json().catch(() => null);
      throw new Error(error_Data?.message ?? "Sorry cannot get the blogs");
    }

    const data = await response.json();
    if (typeof data === "object" || typeof data === [] || data !== null) {
      return data as resultface;
    }
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "name" in error &&
      (error as { name?: unknown }).name === "AbortError"
    ) {
      return {
        success: false,
        message: "Request timeout",
      };
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
    return { success: false, message: "Unexpected" };
  }
};

export { fetchBlog };
