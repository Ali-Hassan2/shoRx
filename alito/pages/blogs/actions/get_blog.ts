import { API_ENDPOINTS } from "@/actions";

interface resultface {
  success: boolean;
  message: string | boolean;
  data?: unknown;
}

interface Props {
  id: string;
}

const fetchBlog = async ({ id }: Props): Promise<resultface> => {
  const controller = new AbortController();
  const signal = controller.signal;
  console.log("The id inside fetchBlog is:", id);

  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const response = await fetch(`${API_ENDPOINTS.getsingleBlog}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.message ?? "Sorry cannot get the blogs");
    }

    const data = await response.json();
    return data as resultface;
  } catch (error: any) {
    if (error.name === "AbortError") {
      return { success: false, message: "Request timeout" };
    }
    return { success: false, message: error.message ?? "Unexpected" };
  }
};

export { fetchBlog };
