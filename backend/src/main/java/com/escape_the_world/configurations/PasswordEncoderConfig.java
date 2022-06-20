package com.escape_the_world.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordEncoderConfig {
    private PasswordEncoder passwordEncoder;

    public PasswordEncoder getPasswordEncoder() {
        return this.passwordEncoder;
    }

    public PasswordEncoderConfig() {
        passwordEncoder = new BCryptPasswordEncoder(11);
    }
}