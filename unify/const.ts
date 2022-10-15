import axios from 'axios'

export const apiURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.withCredentials = true;
export const axiosBase = axios.create({
  baseURL: apiURL
});