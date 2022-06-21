package com.escape_the_world.system.security;

import java.io.IOException;
import java.util.Collections;
import java.util.Optional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private static JwtService jwtService;

    @Autowired
    private SecurityContextAccessor securityContextAccessor;

    @Value("${jwt.prefix}")
    private String prefix;

    @Override
    protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response, final FilterChain filterChain) throws ServletException, IOException {

        final Optional<String> token = Optional.ofNullable(request.getHeader(HttpHeaders.AUTHORIZATION));
        if(token.isPresent() && jwtService.isTokenValid(cleanToken(token.get()))) {
            final Optional<String> username = jwtService.getPlayernameFromToken(cleanToken(token.get()));
            if(username.isPresent()) {
                Authentication authentication = new UsernamePasswordAuthenticationToken(username.get(), null, Collections.emptyList());
                securityContextAccessor.getContext().setAuthentication(authentication);
            }
        }
        filterChain.doFilter(request, response);
    }

    private String cleanToken(final String token) {
        return token.replace(prefix, "").trim();
    }

}