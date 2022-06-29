package com.escape_the_world.exceptions;

public class RessourceAlreadyExistException extends Exception {

    public RessourceAlreadyExistException(Class<?> resourceType, Object resourceId) {
        super(resourceType.getSimpleName() + " " + resourceId + " already exists");
    }

}
