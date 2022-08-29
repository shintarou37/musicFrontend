import axios from 'axios'

export const apiURL: string = 'http://localhost:8080';

export const axiosBase = axios.create({
  baseURL: 'http://localhost:8080',
});