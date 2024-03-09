import getTokenFromLocalStorage from "../Helpers/localStorage-heper";
import axios from "axios";

const headerAuth = "Bearer" + getTokenFromLocalStorage();

export const instance = axios.create(
    {
        baseURL: "https://keys-backend-tvn2.onrender.com/api",
        headers: {
            headerAuth,
        }
    }
)



