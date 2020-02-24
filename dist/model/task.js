"use strict";

var mongoose = require("mongoose");

var taskSchema = new mongoose.Schema({
    listitem: String
});

var Task = mongoose.model("Task", taskSchema);

module.exports = Task;