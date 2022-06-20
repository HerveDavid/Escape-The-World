package com.escape_the_world.entities;

import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Getter @Setter
public class User {

    @Id
    @Column(unique = true)
    private String username;

    @Column
    @NotEmpty
    @NotNull
    private String firstname;

    @Column
    @NotEmpty
    @NotNull
    private String lastname;

    @Column
    @NotEmpty
    @NotNull
    private String email;

    @Column
    @NotEmpty
    @NotNull
    private Role role;

    @Column
    @NotEmpty
    @NotNull
    @JsonIgnore
    private String password;

}
