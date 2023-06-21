# Installer la base de donnée postgresSQL

### Installer sur MAC et Linux

1. Rendre les fichiers ```.sh``` executables.
    ```chmod +x *.sh```
2. Exécuter le script ```./start.sh```
3. Exécuter le script des migrations:La première fois, vous devrez attendre aumoins 20 secondes avant de l'exécuter.
    ```./migrate.sh``.

### Installer sur Windows

1. Exécuter le script ```.\start.bat```
2. Exécuter le script des migrations:La première fois, vous devrez attendre aumoins 20 secondes avant de l'exécuter.
    ```.\migrate.bat``.

### Reprendre l'installation à zéro
Pour recommencer votre installation, vous devrez supprimer le dossier: ```database``` se trouvant à la racine du dossier ``` 0.docker``` avant de continiuer.    

# Supprimer les bases de données
Exécuter le script ```./stop.sh``` ou ```.\stop.bat```.
Supprimer le dossier ```database```

# Migrations

### Ajouter un migration
1. Remplir ou incrémenter la valeur de la version de votre migration dans le fichier ```.env``` se trouvant à la raçine du dossier ```0. docker```: ```VERSION=1```.
2. Générer les fichiers de migration
    ```
    migrate create -dir .\migrations -ext .sql -seq ma_migration
    ```
3. Exécuter le script: ```./migrate.sh``` ou ```.\migrate.bat```.


### Retourner à un version ultérieure
1. Décrémenter la valeur de la version dans le fichier ```.env```.
2. Lancer le script ```./migrate.sh``` ou ```.\migrate.bat```.


