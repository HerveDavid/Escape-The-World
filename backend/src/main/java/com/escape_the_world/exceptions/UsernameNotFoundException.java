package com.escape_the_world.exceptions;

public class UsernameNotFoundException extends Exception {

    public UsernameNotFoundException(Class<?> resourceType, Object resourceId) {
        super("Username " + resourceId + " not found");
    }

}
