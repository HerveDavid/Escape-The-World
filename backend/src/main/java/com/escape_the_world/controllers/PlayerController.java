package com.escape_the_world.controllers;

import java.net.URI;
import java.util.Optional;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.escape_the_world.entities.players.Credentials;
import com.escape_the_world.entities.players.Player;
import com.escape_the_world.services.security.AuthenticationFailureException;
import com.escape_the_world.services.security.AuthorizationFailureException;
import com.escape_the_world.services.security.JwtService;
import com.escape_the_world.services.security.SecurityContextAccessor;
import com.escape_the_world.services.security.Token;
import com.escape_the_world.services.PlayerService;

import lombok.extern.slf4j.Slf4j;


@RestController
@RequestMapping("/v1/players")
@Slf4j
class PlayerController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private SecurityContextAccessor securityContextAccessor;

    @GetMapping("/me")
    @ResponseBody
    Player getCurrentPlayer() {
        final String email = (String) securityContextAccessor.getContext().getAuthentication().getPrincipal();
        return playerService.getPlayerByEmail(email).orElseThrow(AuthorizationFailureException::new);
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    ResponseEntity<?> createPlayer(@RequestBody final Player player) {

        final Player createdPlayer = playerService.createPlayer(player);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdPlayer.getId()).toUri();

        final Optional<Player> player1 = playerService.getPlayerByEmail(createdPlayer.getCredentials().getEmail());
        log.info(player1.map(Player::toString).orElse("NULL"));

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    void patchPlayer(@PathVariable("id") final Long id, @RequestBody final Player player) {
        playerService.updatePlayer(id, player);
    }

    @PostMapping("/email-verification-request")
    @ResponseStatus(HttpStatus.ACCEPTED)
    void emailVerificationRequest(@RequestBody final String token) {
        final Player player = playerService.verifyEmail(token);
        if(player == null) {
            throw new ResourceNotFoundException("Token is not found: " + token);
        }
    }

    @PostMapping("/tokens")
    @ResponseStatus(HttpStatus.CREATED)
    Token createToken(@RequestBody final Credentials credentials) throws AuthenticationFailureException {
        if(playerService.tryAuthentication(credentials)) {
            final String token = jwtService.createToken(credentials.getEmail());
            jwtService.getPlayernameFromToken(token);
            return new Token(token);
        }
        throw new AuthenticationFailureException();
    }


    //TODO VERIFY EMAIL
    //TODO RESET PASSWORD (TOKEN + RESET)

    //TODO UPDATE USER
}