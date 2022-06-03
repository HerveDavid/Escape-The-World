#language: fr

Fonctionnalité: Implémentation des disponibilités d'une salle d'escape game

  Contexte:
    Etant donné l'horaire d'ouverture de Escape The World "8:00"
    Et l'horaire de fermeture de Escape The World "23:00"

  Scénario: une salle d'escape game prends la même durée pour sa préparation (ex: 60 min)
    Etant donné une salle d'escape game
    Et disponible pour toute la journée
    Et d'une durée de session de "60" min
    Quand je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
    | horaire | disponibilite |
    | "8:00"  | "disponible"  |
    | "10:00" | "disponible"  |
    | "12:00" | "disponible"  |
    | "14:00" | "disponible"  |
    | "16:00" | "disponible"  |
    | "18:00" | "disponible"  |
    | "20:00" | "disponible"  |
    | "22:00" | "disponible"  |

  Scénario: une salle d'escape game prends la même durée pour sa préparation (ex: 30 min)
    Etant donné une salle d'escape game
    Et disponible pour toute la journée
    Et d'une durée de session de "30" min
    Quand je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
    | horaire | disponibilite |
    | "8:00"  | "disponible"  |
    | "9:00"  | "disponible"  |
    | "10:00" | "disponible"  |
    | "11:00" | "disponible"  |
    | "12:00" | "disponible"  |
    | "13:00" | "disponible"  |
    | "14:00" | "disponible"  |
    | "15:00" | "disponible"  |
    | "16:00" | "disponible"  |
    | "17:00" | "disponible"  |
    | "18:00" | "disponible"  |
    | "19:00" | "disponible"  |
    | "20:00" | "disponible"  |
    | "21:00" | "disponible"  |
    | "22:00" | "disponible"  |

  Scénario: une salle d'escape game seulement disponible entre 18h et 23h00
    Etant donné une salle d'escape game
    Et disponible entre "18:00" et "23:00"
    Et d'une durée de session de "60" min
    Quand je demande les disponibilités
    Alors je reçois les disponibilités suivantes :
    | horaire | disponibilite   |
    | "8:00"  | "indisponible"  |
    | "10:00" | "indisponible"  |
    | "12:00" | "indisponible"  |
    | "14:00" | "indisponible"  |
    | "16:00" | "indisponible"  |
    | "18:00" | "disponible"    |
    | "20:00" | "disponible"    |
    | "22:00" | "disponible"    |

  Scénario: une salle d'escpae game en travaux
    Etant donné une salle d'escape game en travaux
    Et d'une durée de session de "60" min
    Quand je demande les disponibilités
    Alors je reçois aucune disponibilités
