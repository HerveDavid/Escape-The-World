##language: fr
#
#Fonctionnalité: Implementation des attributs d'un joueur
#
#  Scénario: un joueur a pour champ son prenom, son nom, un courriel et une date de naissance
#    Etant donné un joueur
#    Et comme prenom "John"
#    Et comme nom "Doe"
#    Et comme courriel "john.doe@gmail.com"
#    Et comme date de naissance "2021-12-29"
#    Quand que je demande ses champs
#    Alors le joueur a pour prenom "John"
#    Et le joueur a pour nom "Doe"
#    Et le joueur a pour courriel "john.doe@gmail.com"
#    Et le joueur a pour date de naissance "2021-12-29"
#
#  Plan du Scénario: le courriel doit être dans le format "****@*.*"
#    Etant donné le courriel <courriel>
#    Quand je valide ce courriel
#    Alors ce courriel est <validite>
#
#    Exemples: courriels valides
#      | courriel                | validite |
#      | "username@domain.com"   | "valide" |
#      | "user.name@domain.com"  | "valide" |
#      | "user-name@domain.com"  | "valide" |
#      | "username@domain.co.in" | "valide" |
#      | "user_name@domain.com"  | "valide" |
#
#    Exemples: courriels invalides
#      | courriel                | validite   |
#      | "username.@domain.com"  | "invalide" |
#      | ".user.name@domain.com" | "invalide" |
#      | "user-name@domain.com." | "invalide" |
#      | "username@.com"         | "invalide" |