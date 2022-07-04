import create from "zustand";
import http from "src/utils/http_api";

const useCategoriesStore = create((set) => ({
    categories: [],
    fetchAll: async () => {
        await http.get("/categories")
            .then(({data}) => {
                set(() => ({ categories: data}))
            });
    }
}))

export default useCategoriesStore;