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
    const newTask = req.body.newtask;
    pushTask(newTask);
    taskArr.push(newTask);
    setTimeout(()=>{
        res.redirect("/");
    },1000)
});
router.get("/", function(req, res) {
    setTimeout(()=>{
        res.render("index", { taskArr });
    },1000)
    
    
});

router.get("/taskEdit/:id", async function(req, res) {
    const editItem = await Task.findOne({
        listitem: taskArr[req.params.id]

    })
    const index = req.params.id
    res.render("taskEdit", { editItem, index });
});

router.post("/taskEdit/:id", async function(req, res) {
    await Task.replaceOne(
        { listitem: taskArr[req.params.id] },
        { listitem: req.body.edittask },
    )
    taskArr[req.params.id] = req.body.edittask
    res.redirect("/")
})

router.get("/delete/:id", function(req, res){
    deleteTask(req.params.id)
    res.redirect("/");
})  



module.exports = router;