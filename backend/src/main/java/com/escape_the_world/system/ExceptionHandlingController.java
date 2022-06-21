package com.escape_the_world.system;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.escape_the_world.system.security.AuthenticationFailureException;
import com.escape_the_world.system.security.AuthorizationFailureException;
import com.escape_the_world.system.security.InvalidJwtException;

@ControllerAdvice
public class ExceptionHandlingController {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ResponseBody
    public ExceptionResponse resourceNotFound(final ResourceNotFoundException ex) {
        return new ExceptionResponse("Not Found", "ex.getMessage()");
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ResponseBody
    public ExceptionResponse allExceptions(final Exception ex) {
        return new ExceptionResponse("Bad Request", "Something weird happened: " + ex.getMessage());

    }

    @ExceptionHandler(AuthenticationFailureException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ResponseBody
    public ExceptionResponse authenticationFailure(final AuthenticationFailureException ex) {
        return new ExceptionResponse("UNAUTHORIZED", "Invalid email or password.");

    }

    @ExceptionHandler(InvalidJwtException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ResponseBody
    public ExceptionResponse invalidJwt(final InvalidJwtException ex) {
        return new ExceptionResponse("UNAUTHORIZED", "Malformed Jwt");

    }

    @ExceptionHandler(AuthorizationFailureException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ResponseBody
    public ExceptionResponse authorizationFailure(final AuthorizationFailureException ex) {
        return new ExceptionResponse("UNAUTHORIZED", "Not Authorized.");

    }

}