package com.escape_the_world.repositories;

import com.escape_the_world.entities.Unavailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnavailabilityRepository extends JpaRepository<Unavailability, String> {
}
