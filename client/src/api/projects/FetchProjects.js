import { API_TOKEN, API_URL } from "../../constants/constants.js";

export const fetchProjects = async () => {
  const response = await fetch(
    `${API_URL}/projects?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  return data;
};