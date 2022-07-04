package com.escape_the_world.repositories;

import com.escape_the_world.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface RoomRepository extends JpaRepository<Room, String> {

    @Query(value = "SELECT * FROM room r WHERE r.category = :category", nativeQuery = true)
    Collection<Room> findAllByCategory(@Param("category") String categoryName);

}
