package com.escape_the_world.dto.reponses;

import com.escape_the_world.entities.User;
import lombok.Getter;

import java.io.Serializable;

public class LoginResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;

    @Getter
    private final String jwtToken;

    @Getter
    private User user;

    public LoginResponse(final String jwtToken, final User user) {
        this.jwtToken = jwtToken;
        this.user = user;
    }

}
