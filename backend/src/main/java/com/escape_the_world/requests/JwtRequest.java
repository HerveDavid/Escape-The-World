package com.escape_the_world.requests;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

public class JwtRequest implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;

    @Getter @Setter
    private String username;

    @Getter @Setter
    private String password;

    //need default constructor for JSON Parsing
    public JwtRequest() {}

    public JwtRequest(String username, String password) {
        setUsername(username);
        setPassword(password);
    }

}
