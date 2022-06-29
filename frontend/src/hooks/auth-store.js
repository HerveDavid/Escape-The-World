import { API_URL } from "src/utils/api-endpoint";
import create from "zustand";

const useAuthStore = create((set) => ({
    jwtToken: "",
    user: {},
    authenticate: async ({username, password}) => {
        const res = await fetch(API_URL + "/authenticate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        if(res.status !== 200) {
            throw new Error(username + " not found");
        }
        console.log(res)

        // const user = await res.json();
        // set((state) => ({ ...user }));
    }
}))

export default useAuthStore;