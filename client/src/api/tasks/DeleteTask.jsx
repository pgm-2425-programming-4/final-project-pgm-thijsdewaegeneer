import { API_URL, API_TOKEN } from "../../constants/constants";

export const deleteTask = async (taskId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  if (response.ok) {
    try {
      return await response.json();
    } catch {
      return true;
    }
  } else {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || "Failed to delete task");
  }
};