const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const cors = require("cors");
const port = process.env.local || 5000;
const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "Sabnoor", email: "sabnoor@gmail.com" },
  { id: 3, name: "Sabila", email: "sabila@gmail.com" },
];
app.use(cors());

async function run() {
  try {
    const database = client.db("insertDB");
    const haiku = database.collection("haiku");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("This is my homepage");
});
app.get("/users", async (req, res) => {
  const cursor = userCollection.find({});
  const users = await cursor.toArray();
  res.send(users);
});
app.listen(port, () => {
  console.log("my app is running on", port);
});
