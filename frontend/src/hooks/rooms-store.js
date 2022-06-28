import { API_URL } from "src/utils/api-endpoint";
import  {rooms as roomsMock} from "src/__mocks__/rooms";
import create from "zustand";

const useRoomsStore = create((set) => ({
    rooms: [],
    fetch: async () => {
        //const res = await fetch(API_URL + "/rooms");
        //const rooms = await res.json();
        set({ rooms: roomsMock })
    },
    addRoom: async (room) => {
        await fetch(API_URL + '/rooms', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: room,
        })
        set((state) => ({ rooms: state.rooms.concat(room) }));
    },
    removeRoom: async (room) => {
        await fetch(API_URL + "/rooms/remove/" + room.id, {
            method: 'DELETE',
            mode: 'cors',
            headers: new Headers({
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
        await fetch(API_URL + '/rooms', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(room),
        }).then(() => {
            set((state) => ({ rooms: state.rooms.map(currentRoom => {
                if (currentRoom.id === room.id) {
                    return room;
                }
                return currentRoom;
            })}))
        }).catch(console.err)
    },
}))

export default useRoomsStore;
