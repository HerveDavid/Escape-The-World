#language: fr

Fonctionnalité: Implémentation des disponibilités pour les joueurs d'une salle d'escape game

#  Contexte:
#    Etant donné l'horaire d'ouverture de Escape The World "8:00"
#    Et l'horaire de fermeture de Escape The World "23:00"
#    Et aujourd'hui le 10 mai 2022

  Scénario: une salle d'escape game prends la même durée pour sa préparation (ex: 60 min)
    Etant donné une salle d'escape game
    Et d'une durée de session de 60 min
    Quand je demande les disponibilités pour aujourd'hui
    Alors je reçois les disponibilités suivantes :
      | 10-05-2022 08:00 | disponible |
      | 10-05-2022 10:00 | disponible |
      | 10-05-2022 12:00 | disponible |
      | 10-05-2022 14:00 | disponible |
      | 10-05-2022 16:00 | disponible |
      | 10-05-2022 18:00 | disponible |
      | 10-05-2022 20:00 | disponible |
      | 10-05-2022 22:00 | disponible |

  Scénario: une salle d'escape game prends la même durée pour sa préparation (ex: 30 min)
    Etant donné une salle d'escape game
    Et d'une durée de session de 30 min
    Quand je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
      | 08:00 | disponible |
      | 09:00 | disponible |
      | 10:00 | disponible |
      | 11:00 | disponible |
      | 12:00 | disponible |
      | 13:00 | disponible |
      | 14:00 | disponible |
      | 15:00 | disponible |
      | 16:00 | disponible |
      | 17:00 | disponible |
      | 18:00 | disponible |
      | 19:00 | disponible |
      | 20:00 | disponible |
      | 21:00 | disponible |
      | 22:00 | disponible |

  Scénario: une salle d'escape game indisponible entre 18h et 23h00
    Etant donné une salle d'escape game
    Et d'une durée de session de 60 min
    Et indisponible entre "18:00" et "23:00"
    Quand je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
      | 08:00 | disponible   |
      | 10:00 | disponible   |
      | 12:00 | disponible   |
      | 14:00 | disponible   |
      | 16:00 | disponible   |
      | 18:00 | indisponible |
      | 20:00 | indisponible |
      | 22:00 | indisponible |

  Scénario: une salle d'escape game indisponible de 10h à 14h00, et de 18h à 20h
    Etant donné une salle d'escape game
    Et d'une durée de session de 60 min
    Et indisponible entre "10:00" et "14:00"
    Et indisponible entre "18:00" et "20:00"
    Quand je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
      | 08:00 | disponible   |
      | 10:00 | indisponible |
      | 12:00 | indisponible |
      | 14:00 | indisponible |
      | 16:00 | disponible   |
      | 18:00 | indisponible |
      | 20:00 | indisponible |
      | 22:00 | disponible   |

  Scénario: une salle d'escape game en travaux
    Etant donné une salle d'escape game
    Et d'une durée de session de 60 min
    Et de status "indisponible"
    Quand je demande les disponibilités
    Alors je reçois aucune disponibilités

  Scénario: une salle d'escape game n'est plus en travaux
    Etant donné une salle d'escape game
    Et d'une durée de session de 60 min
    Et de status "indisponible"
    Quand je change le status à "disponible"
    Et je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
      | 08:00 | disponible |
      | 10:00 | disponible |
      | 12:00 | disponible |
      | 14:00 | disponible |
      | 16:00 | disponible |
      | 18:00 | disponible |
      | 20:00 | disponible |
      | 22:00 | disponible |