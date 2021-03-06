package com.escape_the_world.controllers;

import com.escape_the_world.configurations.PasswordEncoderConfig;
import com.escape_the_world.dto.reponses.LoginResponse;
import com.escape_the_world.dto.requests.LoginRequest;
import com.escape_the_world.entities.User;
import com.escape_the_world.exceptions.PasswordNotMatchException;
import com.escape_the_world.security.JwtTokenUtil;
import com.escape_the_world.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoderConfig passwordEncoderConfig;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody @Valid LoginRequest authenticationRequest) throws PasswordNotMatchException {

        // Find user
        final UserDetails userDetails = userService
                .loadUserByUsername(authenticationRequest.getUsername());

        // Launch authentication
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final User user = userService.getByUsername(userDetails.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new LoginResponse(token, user));
    }

    private void authenticate(String username, String password) throws PasswordNotMatchException {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (Exception e) {
            throw new PasswordNotMatchException();
        }
    }
}