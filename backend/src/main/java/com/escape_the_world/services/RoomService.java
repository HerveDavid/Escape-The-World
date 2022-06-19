package com.escape_the_world.services;

import com.escape_the_world.entities.Room;
import com.escape_the_world.repositories.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room createOrUpdate(Room room) {
        return roomRepository.save(room);
    }

    public Room getById(String id) {
        return roomRepository.findById(id).get();
    };

    public List<Room> getAll() {
        return roomRepository.findAll();
    }

}
