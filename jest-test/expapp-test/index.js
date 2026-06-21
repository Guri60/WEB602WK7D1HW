const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

// Array object
const allTodos = [
  {
    id: 1,
    todo: "Do homework"
  },
  {
    id: 2,
    todo: "Get pizza for dinner"
  },
  {
    id: 3,
    todo: "Go to gym"
  }
];

// Home
app.get("/", (req, res) => {
  res.send("Node Express App");
});

// Get all todos
app.get("/todo", (req, res) => {
  res.json(allTodos);
});

// Get todo by id
app.get("/todo/:id", (req, res) => {

  const todo = allTodos.find(
    t => t.id === Number(req.params.id)
  );

  if (!todo) {
    return res.status(404).send("Not found");
  }

  res.json(todo);
});

// Random joke
app.get("/joke", async (req, res) => {

  try {

    const response = await axios.get(
      "https://api.chucknorris.io/jokes/random"
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).send("Error");

  }

});

// Start server only if not testing
if (process.env.NODE_ENV !== "test") {

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

}

module.exports = app;