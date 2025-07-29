import { API_ENDPOINTS } from "@/actions";

interface adminType {
  success: false;
  message: string;
}

interface bodyType {
  name: string;
  email: string;
  password: string;
}

const creatingadmin = async ({ body: bodyType }): Promise<adminType> => {
  const controller = new AbortController();
  const signal = controller.signal;
  const timer = 1500;
  const timeout = setTimeout(() => controller.abort(), timer);

  try {
    const response = await fetch(API_ENDPOINTS.adminsignup, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: signal,
      body: JSON.stringify({ body }),
    });
    clearTimeout(timeout);
    if (!response.ok) {
      const error_Data = await response.json().catch(() => null);
      throw new Error(error_Data?.message, "There is an error");
    }

    const data = await response.json();

    return {
      success: data.success ?? false,
      messsage: data.message ?? "No Message provided",
      data: data.data ?? {},
    };
  } catch (error: unknown) {
    clearTimeout(timeout);
    if (error.name === "AbortError") {
      console.log("Request timeout.");
    }

    return {
      success: false,
      message: error?.message || "Unknow error",
    };
  }
};

export { creatingadmin };
