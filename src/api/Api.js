import axios from "axios";
import { base_url } from "../constants/api_const";



const api = axios.create({
    baseURL: base_url
});

export const getPizzas = async () => api.get('pizza');
export const deletePizza = async (id) => api.delete("pizza/" + id);
export const createPizza = async (data) => api.post('pizza', data);