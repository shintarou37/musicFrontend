import axios from 'axios'

export const apiURL: string = 'http://localhost:8080';

export const axiosBase = axios.create({
  baseURL: 'http://localhost:8080',
});

export interface Obj {
  "ID": number,
  "CreatedAt": string,
  "UpdatedAt": string,
  "DeletedAt": string,
  "name": string,
  "artist": string,
  "reason": string
}