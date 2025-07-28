import { API_ENDPOINTS } from "@/actions";

type FetchingResponse = {
  success: boolean;
  message: string;
  data?: unknown;
};

const fetchingresponse = async (prompt: string): Promise<FetchingResponse> => {
  console.log("The prompt is:", prompt);

  const controller = new AbortController();
  const signal = controller.signal;

  const timer = 15000;
  const timeout = setTimeout(() => controller.abort(), timer);

  try {
    if (!prompt) {
      clearTimeout(timeout);
      return { success: false, message: "Please give a prompt." };
    }

    const response = await fetch(API_ENDPOINTS.getChatResponse, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
      signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      const error_Data = await response.json().catch(() => null);
      throw new Error(error_Data?.message ?? "Sorry cannot get the response.");
    }

    const data = await response.json();

    if (typeof data === "object" && data !== null) {
      return data as FetchingResponse;
    }

    return { success: false, message: "Invalid response we got." };
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

    return { success: false, message: "Unexpected error" };
  }
};

export { fetchingresponse };
