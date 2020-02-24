'use strict';

var express = require('express');
var router = express.Router();
var Task = require('../model/task.js');
var taskArr = [];
async function getAll() {
    var res = await Task.find({});
    res.forEach(function (r) {
        taskArr.push(r.listitem);
    });
}
getAll();
async function pushTask(task) {
    var t = new Task({
        listitem: task
    });
    await t.save();
}

async function deleteTask(i) {
    var t = await Task.deleteOne({
        listitem: taskArr[i]
    });
    taskArr.splice(i, 1);
}

router.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    pushTask(newTask);
    taskArr.push(newTask);
    setTimeout(function () {
        res.redirect("/");
    }, 1000);
});
router.get("/", function (req, res) {
    setTimeout(function () {
        res.render("index", { taskArr: taskArr });
    }, 1000);
});

router.get("/taskEdit/:id", async function (req, res) {
    var editItem = await Task.findOne({
        listitem: taskArr[req.params.id]

    });
    var index = req.params.id;
    res.render("taskEdit", { editItem: editItem, index: index });
});

router.post("/taskEdit/:id", async function (req, res) {
    await Task.replaceOne({ listitem: taskArr[req.params.id] }, { listitem: req.body.edittask });
    taskArr[req.params.id] = req.body.edittask;
    res.redirect("/");
});

router.get("/delete/:id", function (req, res) {
    deleteTask(req.params.id);
    res.redirect("/");
});

module.exports = router;