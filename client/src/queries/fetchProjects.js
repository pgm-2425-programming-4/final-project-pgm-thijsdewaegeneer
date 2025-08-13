import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchProjects() {
    const response = await fetch(`${API_URL}/projects?populate=*`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const data = await response.json();
    return data
}