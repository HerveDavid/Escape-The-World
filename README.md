# Escape-The-World

Projet de web service

## Projet

Projet développé par David Herve & Cédric Vaz, en ReactJS et Spring Boot.

## Lancement du projet

Pour lancer la backend suivre les commandes suivantes :

```
cd backend/
mvn clean install
java -Dfile.encoding=UTF-8 -jar target/EscapeTheWorld-0.0.1-SNAPSHOT.jar
```

Pour lancer ensuite le frontend, suivre les commandes suivantes :

```
cd frontend/
npm install
npm run dev
```

Ouvrir le navigateur, au http://localhost:3000/

## Accès

Pour la partie admin dans le front, les identifiants sont *admin* et *admin*.

Pour la partie client dans le front, les identifiants sont *string* et *string*.

Pour la base donnée à l'adresse http://54.38.33.108/phpmyadmin/index.php, les identifiants sont *mnemosyne* et *@Anfjreu1672jjd1*

## API

La document de l'api est à l'adresse http://localhost:8081/api/swagger-ui/index.html

### Fonctionnalitées principales

- Une connection avec un surnom et un mot de passe
- Une distinction entre les utilisateurs (administreur et joueur)
- Ajout, modification et suppression d'une salle pour l'administrateur
- Catégorie des salles de jeu
- Récupération selon la salle de jeu
- JWT token pour l'administrateur

### Fonctionnalitées non implémentées

- Effectué une réservation pour un client
- Filtrer les réservations selon la disponibilité
- La sécurisation compléte (problème avec le HEADER et le CORS)
- Les modifications de coordonnées clients
