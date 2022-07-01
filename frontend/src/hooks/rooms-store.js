import axios from "axios";
import { set } from "nprogress";
import { roomsCategorie } from "src/hooks/rooms-categorie";
import { API_URL } from "src/utils/api-endpoint";
import  {rooms as roomsMock, topRooms, adventureRooms, horrorRooms, moviesRooms, rooms} from "src/__mocks__/rooms";
import create from "zustand";
import useAuthStore from "./auth-store";

const jwtToken = useAuthStore.getState().jwtToken;

const _http = axios.create({
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

const useRoomsStore = create((set) => ({
    rooms: [],
    fetch: async () => {
        await _http.get('/rooms')
            .then(({data}) => {
                set(() => ({ rooms: data }))
            })
    },
    fetchWithCategorie: async (categorie) => {
        switch(categorie) {
            case roomsCategorie.TOP:
                return topRooms;
            case roomsCategorie.ADVENTURE:
                return adventureRooms;
            case roomsCategorie.HORROR:
                return horrorRooms;
            case roomsCategorie.MOVIES:
                return moviesRooms;
            default:
                return [];
        }
    },
    addRoom: async (room, token) => {
        await _http.post("/rooms/add", JSON.stringify(room))
            .then(() => {set((state) => ({ rooms: state.rooms.concat(room)}))})
            .catch(console.err)
    },
    removeRoom: async (room) => {
        await fetch(API_URL + "/rooms/remove/" + room.id, {
            method: 'DELETE',
            mode: 'no-cors',
            header: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjIwODczOSwiaWF0IjoxNjU2MTkwNzM5fQ.OAnp8Mrd0jmy7udNYbWtxjWDWBmsbWNgiJ3JqUNTDMHk4bsyg03Dg_zddWuIrx83nTBNtoROSxJzD4JY7haTWw',
        })
        }).then(() => {
            set((state) => ({ rooms: state.rooms.filter((currentRoom) => currentRoom.id !== room.id)}));
        })
    },
    updateRoom: async (room) => {
        await _http.post("/rooms/update", JSON.stringify(room))
            .then(() => ({ rooms: state.rooms.map(currentRoom => {
                return currentRoom.id === room.id ? room : currentRoom
            })}))
            .catch(console.error)
    },
}))

export default useRoomsStore;
