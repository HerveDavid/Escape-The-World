import { roomsCategorie } from "src/hooks/rooms-categorie";
import  {rooms as roomsMock, topRooms, adventureRooms, horrorRooms, moviesRooms} from "src/__mocks__/rooms";
import create from "zustand";
import http from "src/utils/http_api";


const useRoomsStore = create((set) => ({
    rooms: [],
    fetch: async () => {
        await http.get('/rooms')
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
    addRoom: async (room) => {
        await http.put("/rooms/add", JSON.stringify(room))
            .then(() => {set((state) => ({ rooms: state.rooms.concat(room)}))})
            .catch(console.err)
    },
    removeRoom: async (room) => {
        await http.delete("/rooms/remove/" + room.id)
            .then(() => {
                set((state) => ({ rooms: state.rooms.filter((currentRoom) => currentRoom.id !== room.id)}));
            })
    },
    updateRoom: async (room) => {
        await http.post("/rooms/update", JSON.stringify(room))
            .then(() => {
                set((state) => ({ rooms: state.rooms.map(currentRoom => {
                    return currentRoom.id === room.id ? room : currentRoom;
                })}))
            })
            .catch(console.error)
    },
}))

export default useRoomsStore;
