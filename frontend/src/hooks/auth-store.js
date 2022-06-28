import create from "zustand";

const useAuthStore = create((set) => ({
    jwtToken: "",
    typeCustomer: "",
    authenticate: async ({username, password}) => {
        if("admin" === username && "admin" === password) {
            set((state) => ({ jwtToken: "jklfjklgjlkqg", typeCustomer: "ADMIN"}));
            return;
        }
        else if ("user" === username && "user" === password) {
            set((state) => ({ jwtToken: "fkjfk", typeCustomer: "CUSTOMER"}));
            return;
        }

        throw new Error("No found");
    }
}))

export default useAuthStore;