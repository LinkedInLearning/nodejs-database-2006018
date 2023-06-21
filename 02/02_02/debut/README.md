
# Documentation 02_02

1. Démarrer les conteneurs 
Allez dans le dossier ```0. docker``` et exécutez les scripts suivant successivement:
    - MAC:
        - ./stop.sh puis
        - ./start.sh
    - Windows:
        - .\stop.bat puis
        - .\start.bat

2. Démarrer l'applicaiton
Allez dans le dossier du chapitre de votre choix et exécutez le scripts suivants:

```
npm install

``` 

3. Démarrer l'application

Démarrer le serveur avec ``` npm start``` .


## Dépendances Sequelize et PostgreSQL
```npm i sequelize pg pg-hstore``` 


## Créer les fichiers de migration:
- allez dans le dossier ```0. docker``` 
- Modifier la valeur de la variable ```VERSION```
- Exécuter la commande suivante:
    ```
    migrate create -ext .sql -dir <chemin> -seq <filename_suffix>
    ``` 
- Écrire les requêtes dans les fichiers appropriés:
    ``` 
    START TRANSACTION;

    # Écrire les requêtes ici!
    
    COMMIT;
    ``` 



