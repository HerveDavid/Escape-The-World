package com.escape_the_world.controllers;

import com.escape_the_world.entities.Room;
import com.escape_the_world.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
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

}
