package com.escape_the_world.exceptions;

public class ResourceNotFoundException extends Exception {

    public ResourceNotFoundException(Class<?> resourceType, Object resourceId) {
        super(resourceType.getSimpleName() + " " + resourceId + " not found");
    }

}
