package com.escape_the_world.controllers;

import com.escape_the_world.entities.Unavailability;
import com.escape_the_world.services.UnavailabilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/availability")
public class UnavailabilityController {

    @Autowired
    private UnavailabilityService unavailabilityService;

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public Unavailability get(@PathVariable(name = "id") String id) {
        return unavailabilityService.getById(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Unavailability createOrUpdate(@RequestBody Unavailability unavailability) {
        return unavailabilityService.createOrUpdate(unavailability);
    }

    @RequestMapping(path = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable(name = "id") String id) {
        unavailabilityService.deleteById(id);
    }

    @RequestMapping(path = "/room/{id}", method = RequestMethod.GET)
    public Unavailability getForRoom(@PathVariable(name = "id") String id) {
        return unavailabilityService.getById(id);
    }

}
