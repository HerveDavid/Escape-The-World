package com.escape_the_world.services.security;

import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class SecurityContextAccessor {


    public SecurityContext getContext() {
        return SecurityContextHolder.getContext();
    }
}