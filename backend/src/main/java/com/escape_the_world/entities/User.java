package com.escape_the_world.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(unique = true)
    private String username;

    @Column
    @NotBlank(message = "Firstname is mandatory")
    private String firstname;

    @Column
    @NotBlank(message = "Lastname is mandatory")
    private String lastname;

    @Column
    @NotBlank(message = "Email is mandatory")
    private String email;

    @Column
    @NotNull(message = "User is mandatory")
    private Role role = Role.PLAYER;

    @Column
    @NotBlank(message = "Password is mandatory")
    @JsonIgnore
    private String password;
}
