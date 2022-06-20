package com.escape_the_world.services;

import com.escape_the_world.entities.User;
import com.escape_the_world.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    public User createOrUpdate(User user) {
        return userRepository.save(user);
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

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
