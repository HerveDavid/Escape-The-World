package com.escape_the_world.controllers;

import com.escape_the_world.entities.Room;
import com.escape_the_world.entities.RoomPagination;
import com.escape_the_world.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/room")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Room get(@PathVariable(name = "id") String id) {
        return roomService.getById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Room createOrUpdate(@RequestBody Room room) {
        return roomService.createOrUpdate(room);
    }

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public List<Room> getAll() {
        return roomService.getAll();
    }

    @RequestMapping(path = "/pagination", method = RequestMethod.GET)
    public Page<Room> getAllPagination(@RequestBody RoomPagination pagination) {
        return roomService.getAll(PageRequest.of(pagination.getStart(), pagination.getSize()));
    }

}
