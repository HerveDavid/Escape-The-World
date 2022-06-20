package com.escape_the_world.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class AdminDto {

    @NotNull
    @NotEmpty
    @Getter @Setter
    private String username;

    @NotNull
    @NotEmpty
    @Getter @Setter
    private String firstname;

    @NotNull
    @NotEmpty
    @Getter @Setter
    private String lastname;

    @NotNull
    @NotEmpty
    @Getter @Setter
    private String password;

    @NotNull
    @NotEmpty
    @Getter @Setter
    private String matchingPassword;

    @NotNull
    @NotEmpty
    @Getter @Setter
    private String email;

}
