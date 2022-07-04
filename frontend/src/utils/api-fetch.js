import { API_URL } from "./api-endpoint";

export const put = async ({url, payload}) => {
    await fetch(API_URL + url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(() => {
        set((state) => ({ rooms: state.rooms.filter((currentRoom) => currentRoom.id !== room.id)}));
    })
}