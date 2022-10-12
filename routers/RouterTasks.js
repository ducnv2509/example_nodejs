import express from 'express';
import { createTask, deleteTask, getAllTasks, getDetailsTask, updateTask } from '../controllers/TaskController.js';
import myLogger from '../winstonLog/winston.js';
const router = express.Router();


router.get('/getAllTasks/', async (req, res) => {
    let response = await getAllTasks();
    res.status(200).send(response);
})


router.post('/create', async (req, res) => {
    let { task, status } = req.body;
    let response = await createTask(task, status);
    res.status(200).send(response);
})


router.put('/update/:id', async (req, res) => {
    let { id } = req.params;
    let { task, status } = req.body;
    let response = await updateTask(id, task, status);
    res.status(200).send(response);
})

router.delete('/delete/:id', async (req, res) => {
    let { id } = req.params;
    let response = await deleteTask(id);
    res.status(200).send(response);
})

router.get('/detail/:id', async (req, res) => {
    let { id } = req.params;
    let response = await getDetailsTask(id);
    res.status(200).send(response);
})
export default router;