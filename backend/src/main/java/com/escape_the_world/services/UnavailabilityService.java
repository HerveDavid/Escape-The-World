package com.escape_the_world.services;

import com.escape_the_world.entities.Unavailability;
import com.escape_the_world.repositories.UnavailabilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnavailabilityService {

    @Autowired
    private UnavailabilityRepository unavailabilityRepository;

    public Unavailability createOrUpdate(Unavailability unavailability) {
        return unavailabilityRepository.save(unavailability);
    }

    public Unavailability getById(String id) {
        return unavailabilityRepository.findById(id).get();
    };

    public void deleteById(String id) {
        unavailabilityRepository.deleteById(id);
    }

}
