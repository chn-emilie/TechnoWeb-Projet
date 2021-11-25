# Ocres Legends

**Arona KA - Julien FROIS - Emilie CHEN**

Dashboard du jeu **League of Legends** (et Teamfight Tactics), inspiré par les plateformes [op.gg](https://euw.op.gg/) et [league of graph](https://www.leagueofgraphs.com/)

## Installation

Installer tous les modules

> `npm install`

Lancer le serveur

> `npm start`

## Documentation

### Fonctionnement

Pour profiter de ce dashboard, il suffit de cliquer sur l'onglet _home_

Et de renseigner un nom d'invocateur. Si vous n'en avez pas, en voici un :

> Keex

### Requêtes API

L'application n'étant pas vérifiée par Riot Games, ceux-ci ne délivrent pas le header correspondant au CORS lors d'une requête API.
Pour profiter pleinement du dashboard, il faudra lancer chrome (ou tout autre navigateur) en désactivant la sécurité WEB pour éviter le CORS.

> `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
