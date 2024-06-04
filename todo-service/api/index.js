// index.js
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment-timezone");
const cors = require('cors');
const Todo = require("../models/Todo.model.js");
require('dotenv').config();
const app = express();
const port = 8080;

app.use(express.json()); 
app.use(cors());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.get("/api/todos", async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({createdDate:-1});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/todo/new", async (req, res) => {
  try {
    const {title, note, status} = req.body;
    const payload = {title, note, status, createdDate: moment().tz("Asia/Ho_Chi_Minh").format("DD-MM-YYYY:hh:mm:ss") }
    const newTodo = await Todo.create(payload);
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
