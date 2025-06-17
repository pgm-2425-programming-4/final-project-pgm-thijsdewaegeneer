import { API_TOKEN, API_URL} from "../../constants/constants.js"

export const updateTaskStatusType = async (taskId, statusId) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      data: {
        StatusType: statusId,
      }
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || "Error updating task status");
  }

  return await response.json();
}