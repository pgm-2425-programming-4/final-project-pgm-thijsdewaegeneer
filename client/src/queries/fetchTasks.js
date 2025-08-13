import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchTasks() {
    const response = await fetch(`${API_URL}/tasks?populate=*`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const data = await response.json();
    return data
}

export async function fetchTasksById(TaskId) {
    const response = await fetch(`${API_URL}/tasks?filters[id][$eq]=${TaskId}&populate=*`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const data = await response.json();
    return data
}
