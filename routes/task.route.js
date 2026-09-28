import express from "express";
import { getAllTasks, getTaskById, createTask, replaceTask, updateTask, deleteTask } from "../controller/task.controller.js";
import { validateCreateTask, validateUpdateTask, validateTaskId, validateDeleteTask } from "../middleware/validation.js"; 

const router = express.Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", validateTaskId, getTaskById);
router.post("/tasks", validateCreateTask, createTask);
router.put("/tasks/:id", validateTaskId, replaceTask);
router.patch("/tasks/:id", validateUpdateTask, updateTask);
router.delete("/tasks/:id", validateDeleteTask, deleteTask);

export default router;