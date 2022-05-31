package com.mnemosyne.entites;

import io.cucumber.java.fr.Alors;
import io.cucumber.java.fr.Etantdonné;
import io.cucumber.java.fr.Quand;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UtilisateurStepdefs {

    private Utilisateur utilisateur;
    private String actuelNom;

    @Etantdonné("un utilisateur ayant comme nom {string}")
    public void unUtilisateurAyantCommeNom(String nom) {
        utilisateur = new Utilisateur(nom);
    }

    @Quand("je demande son nom")
    public void jeDemandeSonNom() {
        actuelNom = utilisateur.getNom();
    }

    @Alors("son nom est {string}")
    public void sonNomEst(String nom) {
        assertEquals(nom, actuelNom);
    }
}
