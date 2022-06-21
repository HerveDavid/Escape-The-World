package com.escape_the_world.dto.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "Username is mandatory")
    private String username;

    @NotBlank(message = "Firstname is mandatory")
    private String firstname;

   @NotBlank(message = "Lastname is mandatory")
    private String lastname;

   @NotBlank(message = "Email is mandatory")
    private String email;

   @NotBlank(message = "Password is mandatory")
    private String password;
}
