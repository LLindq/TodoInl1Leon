const express = require('express')
const router = express.Router()
const Task = require('../model/task.js')
let taskArr = [];
async function getAll() {
    const res = await Task.find({})
    res.forEach((r) => {
        taskArr.push(r.listitem)
    })
}
getAll();
async function pushTask(task) {
    const t = new Task({
        listitem: task
    })
    await t.save()
}

async function deleteTask(i) {
    const t = await Task.deleteOne({
        listitem: taskArr[i]
    })
    taskArr.splice(i, 1)

}

router.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    pushTask(newTask);
    taskArr.push(newTask);
    setTimeout(()=>{
        res.redirect("/");
    },1000)
});
router.get("/", function(req, res) {
    res.render("index", { taskArr });
});

router.get("/taskEdit", function(req, res) {
    res.render("taskEdit", { taskArr });
});

router.get("/delete/:id", function(req, res){
    deleteTask(req.params.id)
    res.redirect("/");
})  



module.exports = router;