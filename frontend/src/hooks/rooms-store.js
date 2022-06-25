import { API_URL } from "src/utils/api-endpoint";
import create from "zustand";

const useRoomsStore = create((set) => ({
    rooms: [],
    fetch: async () => {
        const res = await fetch(API_URL + "/rooms");
        const rooms = await res.json();
        set({ rooms: rooms })
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
        console.log(room.id)
        await fetch(API_URL + "/rooms/remove/" + room.id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
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
