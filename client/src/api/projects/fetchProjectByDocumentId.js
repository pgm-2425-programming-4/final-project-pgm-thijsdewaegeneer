import { API_URL, API_TOKEN } from "../../constants/constants.js";

export const fetchProjectByDocumentId = async (documentId) => {
  const response = await fetch(
    `${API_URL}/projects?filters[documentId][$eq]=${documentId}`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  if (!response.ok) throw new Error("Failed to fetch project");
  const data = await response.json();
  return data.data[0];
};