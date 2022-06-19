package com.escape_the_world.repositories;

import com.escape_the_world.entities.Unavailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface UnavailabilityRepository extends JpaRepository<Unavailability, String> {

    @Query("Select u from Unavailability u where u.idRoom === ?1")
    ArrayList<Unavailability> getUnavailabiltiesByRoom(String idRoom);

}
