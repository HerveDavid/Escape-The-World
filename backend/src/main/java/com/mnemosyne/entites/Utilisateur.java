package com.mnemosyne.entites;

import lombok.Getter;
import lombok.Setter;

public class Utilisateur {

    @Getter @Setter private String nom;

    public Utilisateur(String nom) {
        this.nom = nom;
    }
}
