import getTokenFromLocalStorage from "../Helpers/localStorage-helper";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://keys-backend-tvn2.onrender.com/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
  withCredentials: true,
});
