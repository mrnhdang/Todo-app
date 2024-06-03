// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Todo = require("./models/Todo.model.js");

const app = express();
const port = 8080;

app.use(express.json()); 
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://dang:Dang%401234@todoappdb.jgwk6hj.mongodb.net/TodoAppDB?retryWrites=true&w=majority&appName=TodoAppDB"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/todo/new", async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newTodo = await Todo.findByIdAndDelete(id);
    if (!newTodo) {
      res
        .status(404)
        .json({ message: "Can't find Todo card with id " + id });
    }
    res.status(200).json({ message: "Delete successfully !!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
