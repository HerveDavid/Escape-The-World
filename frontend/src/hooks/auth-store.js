import { API_URL } from "src/utils/api-endpoint";
import create from "zustand";

const useAuthStore = create((set) => ({
    jwtToken: "",
    user: { },
    authenticate: async ({username, password}) => {
        const res = await fetch(API_URL + "/authenticate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        })

        switch(res.status) {
          case 401:
            throw new Error("Password not matched");
          case 404:
            throw new Error(username + " not found");
          case 200:
            const user = await res.json();
            set((_) => ({ ...user }));
        }
    }
}))

export default useAuthStore;