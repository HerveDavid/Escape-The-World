package com.escape_the_world.exceptions;

import com.escape_the_world.dto.errors.ValidationError;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice(annotations = RestController.class)
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers, HttpStatus status, WebRequest request) {
        ValidationError error = new ValidationError();

        error.setErrorMessage("Object validation failed");
        for (FieldError e: ex.getBindingResult().getFieldErrors()) {
            error.addError(e.getField(), e.getDefaultMessage());
        }

        return new ResponseEntity<>(error, status);
    }

    @ExceptionHandler({ ResourceNotFoundException.class })
    public ResponseEntity<Object> handleResourceNotFoundException(ResourceNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), new HttpHeaders(), HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler({ ResourceAlreadyExistException.class })
    public ResponseEntity<Object> handleResourceNotFoundException(ResourceAlreadyExistException e) {
        return new ResponseEntity<>(e.getMessage(), new HttpHeaders(), HttpStatus.CONFLICT);
    }

    @ExceptionHandler({ UsernameNotFoundException.class })
    public ResponseEntity<Object> handleUsernameNotFoundException(UsernameNotFoundException e) {
        return new ResponseEntity<>(e.getMessage(), new HttpHeaders(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({ PasswordNotMatchException.class })
    public ResponseEntity<Object> handlePasswordNotMatchException(PasswordNotMatchException e) {
        return new ResponseEntity(e.getMessage(), new HttpHeaders(), HttpStatus.UNAUTHORIZED);
    }



}
