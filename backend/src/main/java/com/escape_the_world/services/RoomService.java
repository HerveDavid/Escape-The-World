package com.escape_the_world.services;

import com.escape_the_world.entities.Room;
import com.escape_the_world.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room createOrUpdate(Room room) {
        return roomRepository.save(room);
    }

    public Room getRoomById(String id) {
        return roomRepository.getById(id);
    }

}
