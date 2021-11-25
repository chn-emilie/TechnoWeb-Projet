# Ocres Legends

**Arona KA - Julien FROIS - Emilie CHEN**
Dashboard du jeu **League of Legends** (et Teamfight Tactics), inspiré par les plateformes **[op.gg](https://euw.op.gg/)** et **[leagueofgraph](https://www.leagueofgraphs.com/)**

## Documentation

### Fonctionnement

Pour profiter de ce dashboard, il suffit de cliquer sur l'onglet > Home
Et de renseigner un nom d'invocateur. Si vous n'en avez pas, en voici un : > Keex

### Requêtes API

Lancer chrome en désactivant la sécurité WEB pour éviter le CORS et pouvoir effectuer des reqûetes API
`chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
L'application n'étant pas vérifiée par Riot Games, ceux-ci ne délivre pas le header correspondant au CORS lors d'une requête API.
Pour un environnement de développement, ce n'est pas dérangant.
