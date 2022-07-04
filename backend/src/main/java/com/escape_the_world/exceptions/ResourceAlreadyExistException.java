package com.escape_the_world.exceptions;

public class ResourceAlreadyExistException extends Exception {

    public ResourceAlreadyExistException(Class<?> resourceType, Object resourceId) {
        super(resourceType.getSimpleName() + " " + resourceId + " already exists");
    }

}
