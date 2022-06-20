package com.escape_the_world.entities.players;

import java.util.regex.Pattern;

import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class Credentials {

    @Column(unique=true)
    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    public Credentials() {
        this(null, null);
    }

    public Credentials(final String email, final String password) {
        this.email = email;
        this.password = password;
    }

    public Credentials(final String email) {
        this(email, null);
    }

    public boolean isValidMail() {
        return Pattern
                .compile("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")
                .matcher(email)
                .matches();
    }
}