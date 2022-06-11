package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.regex.Pattern;

public class Player {

    @Getter @Setter
    private String firstname;

    @Getter @Setter
    private String lastname;

    @Getter @Setter
    private String mail;

    @Getter @Setter
    private Date birthday;

    public boolean isValidMail() {
        return Pattern
                .compile("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")
                .matcher(mail)
                .matches();
    }

}
