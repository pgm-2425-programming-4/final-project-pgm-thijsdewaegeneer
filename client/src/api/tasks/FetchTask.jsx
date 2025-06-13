import { API_TOKEN, API_URL} from "../../constants/constants.js"

export const fetchTask = async () => {
    const response = await fetch (
        `${API_URL}/tasks?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
        }
    );
    if (!response.ok) {
        throw new Error ("Fetching of tasks failed")
    }
    const data = await response.json();
    return data
};