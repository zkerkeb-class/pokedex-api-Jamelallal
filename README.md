## Concepts à Comprendre
1. REST API
   - Méthodes HTTP (GET, POST, PUT, DELETE)
   - Codes de statut HTTP
   - Structure des URL
   - CORS (Cross-Origin Resource Sharing)

2. Express.js
   - Routing
   - Middleware
   - Gestion des requêtes et réponses
   - Configuration CORS

3. Sécurité de Base
   - Validation des entrées
   - Authentification
   - Gestion des erreurs
   - Politiques CORS

## Configuration CORS
CORS (Cross-Origin Resource Sharing) est un mécanisme qui permet à de nombreuses ressources (polices, JavaScript, etc.) d'une page web d'être demandées à partir d'un autre domaine que celui du domaine d'origine.

Pour utiliser l'API depuis un autre domaine :
1. L'API est configurée avec CORS activé
2. Toutes les origines sont autorisées dans cette version de développement
3. En production, vous devriez restreindre les origines autorisées

Pour une configuration plus restrictive, vous pouvez modifier les options CORS :

```javascript
app.use(cors({
  origin: 'https://votre-domaine.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## Ressources Additionnelles
- [Documentation Express.js](https://expressjs.com/fr/)
- [Guide des Status HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Status)
- [REST API Best Practices](https://restfulapi.net/)

## Support
Pour toute question ou problème :
1. Vérifiez la documentation
2. Consultez les messages d'erreur dans la console
3. Demandez de l'aide à votre formateur

## Prochaines Étapes
- Ajout d'une base de données (MongoDB)
- Implémentation de tests automatisés
- Déploiement de l'API
- Documentation avec Swagger

## Gestion des Fichiers Statiques
Le serveur expose le dossier `assets` pour servir les images des Pokémon. Les images sont accessibles via l'URL :
```
http://localhost:3000/assets/pokemons/{id}.png
```

Par exemple, pour accéder à l'image de Pikachu (ID: 25) :
```
http://localhost:3000/assets/pokemons/25.png
```

### Configuration
Le middleware `express.static` est utilisé pour servir les fichiers statiques :
```javascript
app.use('/assets', express.static(path.join(__dirname, '../assets')));
```

### Sécurité
- Seuls les fichiers du dossier `assets` sont exposés
- Les autres dossiers du projet restent inaccessibles
- En production, considérez l'utilisation d'un CDN pour les fichiers statiques



# Pokédex API - Jamelallal

Bienvenue dans le backend du projet **Pokédex Jamelallal** ! 🌟

Ce projet vous permet de :

- Créer, modifier et consulter des Pokémons
- S'enregistrer et se connecter en toute sécurité
- Servir des images statiques de Pokémons

---

## 📚 Concepts utilisés

- **Node.js + Express.js** pour construire l'API REST
- **MongoDB + Mongoose** pour la base de données
- **CORS** pour permettre l'accès au frontend
- **JWT** pour l'authentification sécurisée

---

## 🛠️ Instructions d'installation

### 1. Cloner le projet

```bash
git clone https://github.com/zkerkeb-class/pokedex-api-Jamelallal.git
cd pokedex-api-Jamelallal
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer l'environnement

Créer un fichier `.env` à la racine :

```env
PORT=3000
MONGO_URI=Votre_URL_MongoDB
JWT_SECRET=Votre_Clé_Secrète
```

### 4. Lancer le serveur

```bash
npm run dev
```

Le serveur sera accessible sur : [http://localhost:3000](http://localhost:3000)

---

## 📚 Documentation de l'API

### 1. Authentification

| Méthode | URL                 | Description                   |
| :------ | :------------------ | :---------------------------- |
| POST    | /api/users/register  | Inscription d'un utilisateur  |
| POST    | /api/users/login     | Connexion d'un utilisateur    |

### 2. Pokémons

| Méthode | URL                   | Description                          |
| :------ | :-------------------- | :---------------------------------- |
| GET     | /api/pokemons          | Récupérer tous les Pokémons          |
| GET     | /api/pokemons/:id      | Récupérer un Pokémon par ID          |
| POST    | /api/pokemons          | Créer un Pokémon (authentification requise) |
| PUT     | /api/pokemons/:id      | Modifier un Pokémon (authentification requise) |
| DELETE  | /api/pokemons/:id      | Supprimer un Pokémon (authentification requise) |

---

## ⚙️ Fonctionnalités techniques

- Authentification sécurisée avec JWT
- Hash des mots de passe avec Bcrypt
- Gestion des erreurs complète
- CORS activé pour l'intégration frontend

---

## 🖼️ Gestion des fichiers statiques

Les images Pokémon sont accessibles via :

```bash
http://localhost:3000/assets/pokemons/{id}.png
```

Middleware utilisé :

```javascript
app.use('/assets', express.static(path.join(__dirname, '../assets')));
```

---

## 🧠 Concepts REST utilisés

- **GET** : Lire une ressource
- **POST** : Créer une nouvelle ressource
- **PUT** : Mettre à jour une ressource
- **DELETE** : Supprimer une ressource

---

## 🚀 Prochaines étapes possibles

- Déploiement en production
- Tests automatisés
- Documentation avec Swagger

---

## 🎥 Vidéo de démonstration

▶️ [Voir la démo sur YouTube](https://youtube.com)

---

# Concepts à Comprendre

## 1. REST API

- Méthodes HTTP (GET, POST, PUT, DELETE)
- Codes de statut HTTP
- Structure des URL
- CORS (Cross-Origin Resource Sharing)

## 2. Express.js

- Routing
- Middleware
- Gestion des requêtes et réponses
- Configuration CORS

## 3. Sécurité de Base

- Validation des entrées
- Authentification
- Gestion des erreurs
- Politiques CORS

---

# Configuration CORS

CORS (Cross-Origin Resource Sharing) est un mécanisme qui permet à de nombreuses ressources (polices, JavaScript, etc.) d'être demandées à partir d'un autre domaine que celui du domaine d'origine.

Pour utiliser l'API depuis un autre domaine :

1. L'API est configurée avec CORS activé
2. Toutes les origines sont autorisées dans cette version de développement
3. En production, vous devriez restreindre les origines autorisées

Pour une configuration plus restrictive :

```javascript
app.use(cors({
  origin: 'https://votre-domaine.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

# Ressources Additionnelles

- [Documentation Express.js](https://expressjs.com/fr/)
- [Guide des Status HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Status)
- [REST API Best Practices](https://restfulapi.net/)

---

# Support

Pour toute question ou problème :

1. Vérifiez la documentation
2. Consultez les messages d'erreur dans la console
3. Demandez de l'aide à votre formateur

---

# Gestion des Fichiers Statiques

Le serveur expose le dossier `assets` pour servir les images des Pokémon :

```
http://localhost:3000/assets/pokemons/{id}.png
```

Exemple :

```
http://localhost:3000/assets/pokemons/25.png
```

Middleware utilisé :

```javascript
app.use('/assets', express.static(path.join(__dirname, '../assets')));
```

**Sécurité :**

- Seuls les fichiers du dossier `assets` sont exposés
- Les autres dossiers du projet restent inaccessibles
- En production, considérez l'utilisation d'un CDN pour les fichiers statiques
