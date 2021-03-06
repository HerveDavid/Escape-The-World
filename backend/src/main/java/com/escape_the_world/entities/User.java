package com.escape_the_world.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {

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
    @JsonIgnore()
    private String password;
}
