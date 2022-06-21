package com.escape_the_world.dto.reponses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterReponse {

    private String username;

    private String firstname;

    private String lastname;

    private String email;

}
