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
    const characters = await collection.find().toArray();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/api/:collection/:id", async (req, res) => {
  try {
    // console.log(req.params["collection"]);
    // console.log(req.params["id"]);
    const collection = database.collection(req.params["collection"]);
    const characters = await collection
      .findOne({ id: req.params["id"] })
      .toArray();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/api/:collection/:id/:sub", async (req, res) => {
  console.log(`Tier 3`);
  console.log(req.params);
});

// app.get("/api/characters", async (req, res) => {
//   try {
//     const collection = database.collection("characters");
//     const characters = await collection.find().toArray();
//     res.json(characters);
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// app.get("/api/planets", async (req, res) => {
//   try {
//     const collection = database.collection("planets");
//     const planets = await collection.find().toArray();
//     res.json(planets);
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// //Serve all the people at GET /people
// app.get("/api/people", async (req, res) => {
//   // res.send(people);
//   try {
//     const client = await MongoClient.connect("mongodb://localhost:27017");
//     const db = client.db("edp");
//     const collection = db.collection("people");
//     const people = await collection.find().toArray();
//     client.close();
//     res.json(people);
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// app.get("/api/people/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const client = await MongoClient.connect("mongodb://localhost:27017");
//     const db = client.db("edp");
//     const collection = db.collection("people");
//     const person = await collection.findOne({ id: +id });
//     client.close();
//     if (person) {
//       res.json(person);
//     } else {
//       res.status(404).json({ message: "Person not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error });
//   }
// });

// app.post("/api/people", async (req, res) => {
//   const data = req.body;
//   try {
//     const client = await MongoClient.connect("mongodb://localhost:27017");
//     const db = client.db("edp");
//     const collection = db.collection("people");
//     const result = await collection.insertOne(data);
//     client.close();
//     res.status(201).json({ _id: result.insertedId });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error });
//   }
// });

app.use("", express.static("public/dist/index.html"));
app.use("/index.html", express.static("public/dist/index.html"));
app.use("/assets", express.static("public/dist/assets"));
app.use(express.static("public"));

const port = 3502;
app.listen(port, () => console.log(`Listening on port ${port}.`));
