package com.escape_the_world.controllers;

import com.escape_the_world.entities.User;
import com.escape_the_world.requests.PaginationRequest;
import com.escape_the_world.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(path = "/{username}", method = RequestMethod.GET)
    public User get(@PathVariable(name = "username") String username) {
        return userService.getByUsername(username);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public User createOrUpdate(@RequestBody User user) {
        return userService.createOrUpdate(user);
    }

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public List<User> getAll() {
        return userService.getAll();
    }

    @RequestMapping(path = "/pagination", method = RequestMethod.GET)
    public Page<User> getAllPagination(@RequestBody PaginationRequest pagination) {
        return userService.getAll(PageRequest.of(pagination.getStart(), pagination.getSize()));
    }

    @RequestMapping(path = "/remove/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable(name = "id") String id) {
        userService.remove(id);
    }

}
