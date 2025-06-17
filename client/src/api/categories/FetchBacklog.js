import { API_TOKEN, API_URL} from "../../constants/constants.js"

export const fetchBacklog = async () => {
    const response = await fetch (
           `${API_URL}/statuses?populate=*&filters[StatusType][$eq]=Backlog`,
        {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
            },
        }
    );
    if (!response.ok) {
        throw new Error ("Fetching of statuses failed")
    }
    const data = await response.json();
    return data
};