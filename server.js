// The web server
import express from "express";
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());

// Connect to MongoDB
const url = "mongodb://localhost:27017";
const dbName = "swapi";
let database;
async function startup() {
  const client = await MongoClient.connect(url);
  database = client.db("swapi");
}
startup();

// Routes
app.all("*", (req, res, next) => {
  console.log(req.url);
  next();
});

//Serve all the people at GET /people
app.get("/api/:collection", async (req, res) => {
  try {
    const collection = database.collection(req.params["collection"]);
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/api/:collection/:id", async (req, res) => {
  try {
    const collection = database.collection(req.params["collection"]);
    const item = await collection.findOne({ "id": parseInt(req.params["id"]) });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// So for this: example film 1 characters
// So in films_characters make a query to get all characters from the given film id
// Then follow that up by getting an array of all the characters from their ids
app.get("/api/:collection/:id/:sub", async (req, res) => {
  try {
    switch(req.params["collection"]) {
      case 'films':
        let items = [];
        if (req.params["sub"] === 'characters') {
          const collection = database.collection('films_characters');
          const filmToChars = await collection.find({ "film_id": parseInt(req.params["id"]) }).toArray();
          const characters = database.collection('characters');
          for (let filmToChar of filmToChars) {
            let item = await characters.findOne({"id": filmToChar.character_id});
            items.push(item);
          }
        }
        else if (req.params["sub"] === 'planets') {
          const collection = database.collection('films_planets');
          const filmToPlanets = await collection.find({ "film_id": parseInt(req.params["id"]) }).toArray();
          const planets = database.collection('planets');
          for (let filmToPlanet of filmToPlanets) {
            let item = await planets.findOne({"id": filmToPlanet.planet_id});
            items.push(item);
          }
        }
        res.json(items);
        break;

      case 'characters':
        if (req.params["sub"] === 'planet') {
          const characters = database.collection('characters');
          const character = await characters.findOne({ "id": parseInt(req.params["id"]) });
          const planets = database.collection('planets');
          let homeworld = await planets.findOne({"id": character.homeworld});
          console.log(homeworld);
          res.json(homeworld);
          break;
        }
        else if (req.params["sub"] === 'films') {
          let items = [];
          const collection = database.collection('films_characters');
          const filmToChars = await collection.find({ "character_id": parseInt(req.params["id"]) }).toArray();
          const films = database.collection('films');
          for (let filmToChar of filmToChars) {
            let item = await films.findOne({"id": filmToChar.film_id});
            items.push(item);
          }
          res.json(items);
        }
        break;
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.use("", express.static("public/dist/index.html"));
app.use("/index.html", express.static("public/dist/index.html"));
app.use("/assets", express.static("public/dist/assets"));
app.use(express.static("public"));

const port = 3502;
app.listen(port, () => console.log(`Listening on port ${port}.`));
