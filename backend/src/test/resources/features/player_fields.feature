#language: fr

Fonctionnalité: Implementation des attributs d'un joueur

  Scénario: un joueur a pour champ son prenom, son nom, un courriel et une date de naissance
    Etant donné un joueur
    Et comme prenom "John"
    Et comme nom "Doe"
    Et comme courriel "john.doe@gmail.com"
    Et comme date de naissance "2021-12-29"
    Quand que je demande ses champs
    Alors le joueur a pour prenom "John"
    Et le joueur a pour nom "Doe"
    Et le joueur a pour courriel "john.doe@gmail.com"
    Et le joueur a pour date de naissance "2021-12-29"

