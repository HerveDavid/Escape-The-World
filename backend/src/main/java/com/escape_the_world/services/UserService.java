package com.escape_the_world.services;

import com.escape_the_world.configurations.PasswordEncoderConfig;
import com.escape_the_world.dto.requests.RegisterRequest;
import com.escape_the_world.entities.Role;
import com.escape_the_world.entities.User;
import com.escape_the_world.exceptions.ResourceAlreadyExistException;
import com.escape_the_world.exceptions.UsernameNotFoundException;
import com.escape_the_world.repositories.UserRepository;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoderConfig passwordEncoderConfig;

    public User createOrUpdate(User user) {
        if(user.getPassword() != null) {
            user.setPassword(passwordEncoderConfig.getPasswordEncoder().encode(user.getPassword()));
        }
        return userRepository.save(user);
    }

    public User register(RegisterRequest request) throws ResourceAlreadyExistException {

        // User need to be unique
        Optional<User> user = userRepository.findByUsername(request.getUsername());
        if (user.isPresent()) {
            throw new ResourceAlreadyExistException(User.class, request.getUsername());
        }

        // Encoded password
        String encodedPassword = passwordEncoderConfig.getPasswordEncoder().encode(request.getPassword());

        // User is a PLAYER by default
        return userRepository.save(new User(
                request.getUsername(),
                request.getFirstname(),
                request.getLastname(),
                request.getEmail(),
                Role.PLAYER,
                encodedPassword
        ));

    }

    public User getByUsername(String username) {
        return userRepository.getById(username);
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public Page<User> getAll(PageRequest pr) {
        return userRepository.findAll(pr);
    }

    public void remove(final String username) {
        userRepository.deleteById(username);
    }

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String username) {

        Optional<User> user = userRepository.findByUsername(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException(User.class, username);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.get().getRole()));
        return new org.springframework.security.core.userdetails.User(user.get().getUsername(), user.get().getPassword(), authorities);
    }
}
