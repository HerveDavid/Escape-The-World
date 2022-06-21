package com.escape_the_world.entities.players;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
@Entity(name = "Player")
public class Player {

    @Id
    @Getter @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Getter @Setter
    private String firstname;

    @Getter @Setter
    private String lastname;
    
    @Getter @Setter
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Boolean isEmailVerified = Boolean.FALSE;

    @Getter @Setter
    @JsonIgnore
    private String emailVerificationCode;

    @Embedded
    @Getter @Setter
    private Credentials credentials;
    
    public Player() {
        this(null, null, null, null);
    }

    public Player(final String firstname, String lastname, final Credentials credentials) {
        this(null, firstname, lastname, credentials);
    }

    public Player(final Long id, final String firstname, final String lastname, final Credentials credentials) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.credentials = credentials;
    }

    public void merge(final Player source) {

        if(source.getFirstname()!= null) {
            this.setFirstname(source.getFirstname());
        }
        
        if(source.getLastname()!= null) {
            this.setLastname(source.getLastname());
        }

        if(source.getCredentials() != null && source.getCredentials().getPassword() != null) {
            this.getCredentials().setPassword(source.getCredentials().getPassword());
        }

    }

}