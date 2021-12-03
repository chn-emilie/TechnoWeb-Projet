//routes call vers api

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const server = require('http').Server(app);


const mongoDBModule = require('./mongo/crud-mongo');

// Pour les formulaires standards
const bodyParser = require('body-parser');
// pour les formulaires multiparts
var multer = require('multer');
var multerData = multer();

// Cette ligne indique le répertoire qui contient
// les fichiers statiques: html, css, js, images etc.
app.use(express.static(__dirname + '/public'));
// Paramètres standards du modyle bodyParser
// qui sert à récupérer des paramètres reçus
// par ex, par l'envoi d'un formulaire "standard"
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");

	next();
});

// Lance le serveur avec express
server.listen(port);
console.log("Serveur lancé sur le port : " + port);

//------------------
// ROUTES
//------------------
// Utile pour indiquer la home page, dans le cas
// ou il ne s'agit pas de public/index.html
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/MyTableVue', (req, res) => {
	res.sendFile(__dirname + '/public/TableVue.html');
});

// Ici des routes en :
// http GET (pour récupérer des données)
// http POST : pour insérer des données
// http PUT pour modifier des données
// http DELETE pour supprimer des données

//----------------------------------------------
// Ces routes forment l'API de l'application !!
//----------------------------------------------

// Test de la connexion à la base
app.get('/api/connection', (req, res) => {
	// Pour le moment on simule, mais après on devra
	// réellement se connecte à la base de données
	// et renvoyer une valeur pour dire si tout est ok
	mongoDBModule.connexionMongo()
		.then(db => {
			let reponse;

			if (!db) {
				console.log("erreur connexion");
				reponse = {
					msg: "erreur de connexion err=" + err
				}
			} else {
				reponse = {
					msg: "connexion établie"
				}
			}
			res.send(JSON.stringify(reponse));
		});
});


// Récupération d'un seul restaurant par son id
app.get('/api/summoner/:id', (req, res) => {
	var id = req.params.id;

	mongoDBModule.findSummonerById(id)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});


// Creation d'un restaurant par envoi d'un formulaire
// On fera l'insert par un POST, c'est le standard REST
app.post('/api/summoner', multerData.fields([]), (req, res) => {
	// On supposera qu'on ajoutera un restaurant en 
	// donnant son nom et sa cuisine. On va donc 
	// recuperer les données du formulaire d'envoi
	// les params sont dans req.body même si le formulaire
	// est envoyé en multipar

	mongoDBModule.createSummoner(req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

// Modification d'un restaurant, on fera l'update par
// une requête http PUT, c'est le standard REST
app.put('/api/summoner/:id', multerData.fields([]), (req, res) => {
	var id = req.params.id;

	mongoDBModule.updateSummoner(id, req.body)
		.then(data => {
			res.send(JSON.stringify(data));
		});
});

// Suppression d'un restaurant
// On fera la suppression par une requête http DELETE
// c'est le standard REST
app.delete('/api/summoner/:id', (req, res) => {
	var id = req.params.id;

	mongoDBModule.deleteSummoner(id)
		.then(data => {
			res.send(JSON.stringify(data));
		});
})

