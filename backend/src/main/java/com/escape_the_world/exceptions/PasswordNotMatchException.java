package com.escape_the_world.exceptions;

public class PasswordNotMatchException extends Exception {
    public PasswordNotMatchException() {
        super("Password not matched");
    }
}
