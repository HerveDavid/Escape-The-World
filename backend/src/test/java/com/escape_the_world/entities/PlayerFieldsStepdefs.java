//package com.escape_the_world.entities;
//
//import io.cucumber.java.fr.Alors;
//import io.cucumber.java.fr.Et;
//import io.cucumber.java.fr.Etantdonné;
//import io.cucumber.java.fr.Quand;
//
//import java.text.DateFormat;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//public class PlayerFieldsStepdefs {
//
//    private Player player = new Player();
//    private boolean isValidMail = false;
//
//    @Etantdonné("un joueur")
//    public void unJoueur() {
//        player = new Player();
//    }
//
//    @Et("comme prenom {string}")
//    public void commePrenom(String firstname) {
//        player.setFirstname(firstname);
//    }
//
//    @Et("comme nom {string}")
//    public void commeNom(String lastname) {
//        player.setLastname(lastname);
//    }
//
//    @Et("comme courriel {string}")
//    public void commeCourriel(String mail) {
//        player.setMail(mail);
//    }
//
//    @Quand("que je demande ses champs")
//    public void queJeDemandeSesChamps() {
//    }
//
//    @Alors("le joueur a pour prenom {string}")
//    public void leJoueurAPourPrenom(String firstname) {
//        assertEquals(firstname, player.getFirstname());
//    }
//
//    @Et("le joueur a pour nom {string}")
//    public void leJoueurAPourNom(String lastname) {
//        assertEquals(lastname, player.getLastname());
//    }
//
//    @Et("le joueur a pour courriel {string}")
//    public void leJoueurAPourCourriel(String mail) {
//        assertEquals(mail, player.getMail());
//    }
//
//    @Et("comme date de naissance {string}")
//    public void commeDateDeNaissance(String birthday) throws ParseException {
//        player.setBirthday(new SimpleDateFormat("yyyy-mm-dd").parse(birthday));
//
//    }
//
//    @Et("le joueur a pour date de naissance {string}")
//    public void leJoueurAPourDateDeNaissance(String birthday) {
//        DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd");
//        assertEquals(birthday, dateFormat.format(player.getBirthday()));
//    }
//
//    @Etantdonné("le courriel {string}")
//    public void leCourriel(String mail) {
//        player.setMail(mail);
//    }
//
//    @Quand("je valide ce courriel")
//    public void jeValideCeCourriel() {
//        isValidMail = player.isValidMail();
//    }
//
//    @Alors("ce courriel est {string}")
//    public void ceCourrielEstValidite(String validite) {
//        boolean valid = "valide".equals(validite);
//        assertEquals(valid, isValidMail);
//    }
//}
