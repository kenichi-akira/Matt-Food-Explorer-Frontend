import axios from "axios";

export const api = axios.create({
    baseURL: "https://matt-food-explorer-backend.onrender.com"
});
