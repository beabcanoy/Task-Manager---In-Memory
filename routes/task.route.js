import express from "express";
import { getAllTasks, getTaskById, createTask, replaceTask, updateTask, deleteTask } from "../controller/task.controller.js"; 

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
router.put("/tasks/:id", replaceTask);
router.patch("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;