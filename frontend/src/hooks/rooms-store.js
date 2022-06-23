import { rooms as roomsMock } from "src/__mocks__/rooms";
import create from "zustand";

const useRoomsStore = create((set) => ({
    rooms: [],
    fetch: () => {
        set({ rooms: roomsMock })
    },
    addRoom: (room) => set((state) => ({ rooms: state.rooms.concat(room) })),
    removeRoom: (room) => set((state) => ({ rooms: state.rooms.filter((currentRoom) => currentRoom.id !== room.id)})),
}))

export default useRoomsStore;
