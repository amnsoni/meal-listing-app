export default async function fetchMeals() {
    const API = "https://api.freeapi.app/api/v1/public/meals";
    try {
        const res = await fetch(API);
        if (res.ok) {
            const data = await res.json();
            return data?.data?.data;
        } 
        return [];
    } catch (error) {
        console.error("Error fetching meals: ", error);
    }
}