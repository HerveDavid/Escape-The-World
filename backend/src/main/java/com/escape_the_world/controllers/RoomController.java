package com.escape_the_world.controllers;

import com.escape_the_world.dto.requests.PaginationRequest;
import com.escape_the_world.entities.Room;
import com.escape_the_world.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Room get(@PathVariable(name = "id") String id) {
        return roomService.getById(id);
    }

    @RequestMapping(path = "/add", method = RequestMethod.PUT)
    public Room create(@RequestBody @Valid Room room) {
        return roomService.createOrUpdate(room);
    }

    @RequestMapping(path = "/update", method = RequestMethod.POST)
    public Room update(@RequestBody @Valid Room room) {
        return roomService.createOrUpdate(room);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Room> getAll() {
        return roomService.getAll();
    }

    @RequestMapping(path = "/pagination", method = RequestMethod.GET)
    public Page<Room> getAllPagination(@RequestBody PaginationRequest pagination) {
        return roomService.getAll(PageRequest.of(pagination.getStart(), pagination.getSize()));
    }

    @RequestMapping(path = "/remove/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable(name = "id") String id) {
        roomService.remove(id);
    }

    @RequestMapping(path = "/category/{name}", method = RequestMethod.GET)
    public Collection<Room> findAllByCategory(@PathVariable(name = "name") String name) {
        return roomService.findAllByCategory(name);
    }
}
