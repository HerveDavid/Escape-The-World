import axios from "axios";
import useAuthStore from "src/hooks/auth-store";
import { API_URL } from "src/utils/api-endpoint";

const jwtToken = useAuthStore.getState().jwtToken;

const http = axios.create({
    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Authorization': `Bearer ${jwtToken}`,
    },
    credentials: true,
})

export default http;