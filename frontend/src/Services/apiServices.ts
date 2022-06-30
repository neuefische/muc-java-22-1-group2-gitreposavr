import axios, {AxiosResponse} from "axios";
import {LoginResponse} from "../models";


export function registerUser (username: string, password: string) {
 return axios.post("/api/user", {username: username, password: password});
}

export function loginUser (username: string, password: string) {
 return axios.post("/api/login", {username: username, password: password})
     .then((response: AxiosResponse<LoginResponse>) => response.data);
}