package com.escape_the_world.services;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.escape_the_world.entities.players.Credentials;
import com.escape_the_world.entities.players.Player;
import com.escape_the_world.services.security.AuthorizationFailureException;
import com.escape_the_world.services.security.SecurityContextAccessor;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class PlayerService {

    @Autowired
    private PlayerRepository repository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private SecurityContextAccessor securityContextAccessor;

    @Autowired
    private ApplicationEventPublisher eventPublisher;

    public Player createPlayer(final Player player) {

        //encode password before saving.
        final String plainPassword = player.getCredentials().getPassword();
        final String encodedPassword = passwordEncoder.encode(plainPassword);
        player.getCredentials().setPassword(encodedPassword);

        // create email verification code
        player.setEmailVerificationCode(UUID.randomUUID().toString());

        final Player createdPlayer = repository.save(player);

        // TODO email needs to be sent via listener
        eventPublisher.publishEvent(new EntityCreatedEvent<Player>(createdPlayer));

        return createdPlayer;
    }

    public Player updatePlayer(final Long id, final Player player) {
        final String email = (String) securityContextAccessor.getContext().getAuthentication().getPrincipal();
        final Player persistedPlayer = repository.findByCredentialsEmail(email)
                .orElseThrow(AuthorizationFailureException::new);

        // TODO move to spring security
        if(!persistedPlayer.getId().equals(id)) {
            throw new AuthorizationFailureException();
        }

        persistedPlayer.merge(player);
        return repository.save(persistedPlayer);
    }

    public Player verifyEmail(final String token) {
        final Optional<Player> player = repository.findByEmailVerificationCode(token);
        if(player.isPresent() && token.equals(player.get().getEmailVerificationCode())) {
                player.get().setEmailVerificationCode(null);
                player.get().setIsEmailVerified(Boolean.TRUE);
                return repository.save(player.get());
        }
        return null;
    }

    public Optional<Player> getPlayerByEmail(final String email) {
        return repository.findByCredentialsEmail(email);
    }

    public boolean tryAuthentication(final Credentials credentials) {
        log.info(credentials.toString());
        final Optional<Player> playerResult = getPlayerByEmail(credentials.getEmail());
        return playerResult.filter(player -> passwordEncoder.matches(credentials.getPassword(),
                player.getCredentials().getPassword())).isPresent();
    }

}