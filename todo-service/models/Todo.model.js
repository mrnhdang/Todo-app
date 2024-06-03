const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter product name"],
  },
  note: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: [true, "Please enter to do card status"],
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;