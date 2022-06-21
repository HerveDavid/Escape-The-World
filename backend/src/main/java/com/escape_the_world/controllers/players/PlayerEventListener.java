package com.escape_the_world.controllers.players;

import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.escape_the_world.entities.players.Player;
import com.escape_the_world.system.EntityCreatedEvent;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
class PlayerEventListener {

    @EventListener
    @Async
    void onUserCreated(EntityCreatedEvent<Player> event) {
        try {
            Thread.sleep(10000L);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        log.info("User is created: " + event.getSource());
    }

}