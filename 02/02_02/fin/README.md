
Débuter

1. Demarrer les conteneurs
Allez dans le dossier ```0. docker``` et exécutez les scripts suivant successivement:
    - MAC:
        - ./stop.sh puis
        - ./start.sh
    - Windows:
        - .\stop.bat puis
        - .\start.bat

2. Démarrer l'applicaiton
Allez dans le dossier du chapittre de votre choix et exécutez le scripts suivants:

- Installer les dépendances avec ```npm install``` .
- Démarrer le serveur avec ``` npm start``` .

3. Créer les fichiers de migration:
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



