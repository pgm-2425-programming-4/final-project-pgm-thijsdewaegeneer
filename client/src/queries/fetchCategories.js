import { API_URL, API_TOKEN } from "../constants/constants";

export async function fetchCategories() {
    const response = await fetch(`${API_URL}/categories?populate=*`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const data = await response.json();
    return data
}

export async function fetchCategoriesById(CategoryId) {
    const response = await fetch(`${API_URL}/categories?filters[id][$eq]=${CategoryId}&populate=*`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`
        },
    })
    const data = await response.json();
    return data
}
