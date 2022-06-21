package com.escape_the_world.dto.errors;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@NoArgsConstructor
public class ValidationError implements Serializable {

    @Getter @Setter
    private String errorMessage;

    @Getter
    private Map<String, String> fieldErrors = new HashMap<>();

    public void addError(String field, String message) {
        fieldErrors.put(field, message);
    }

}
