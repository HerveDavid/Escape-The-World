package com.escape_the_world.system.security;

@SuppressWarnings("serial")
public class InvalidJwtException extends RuntimeException {

    public InvalidJwtException(final String message, final Exception exception) {
        super(message, exception);
    }

}