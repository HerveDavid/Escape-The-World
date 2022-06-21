package com.escape_the_world.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.escape_the_world.entities.players.Player;

public interface PlayerRepository extends JpaRepository<Player, Long> {
    Optional<Player> findById(Long id);
    Optional<Player> findByCredentialsEmail(String email);
    Optional<Player> findByEmailVerificationCode(String token);
}