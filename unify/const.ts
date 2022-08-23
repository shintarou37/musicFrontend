import axios from 'axios'

export const apiURL: string = 'http://localhost:8080';

export const axiosBase = axios.create({
  baseURL: 'http://localhost:8080',
});

export interface MusicObj {
  "ID": number,
  "Name": string,
  "Artist": string,
  "Reason": string,
  "Mst_situationName": string,
}

export interface SituationObj {
  "ID": number,
  "CreatedAt": string,
  "UpdatedAt": string,
  "DeletedAt": null,
  "Name": string,
  "Musics": null
}