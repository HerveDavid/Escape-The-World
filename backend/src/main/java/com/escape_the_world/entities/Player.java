package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class Player {

    @Getter @Setter
    private String firstname;

    @Getter @Setter
    private String lastname;

    @Getter @Setter
    private String mail;

    @Getter @Setter
    private Date birthday;

}
