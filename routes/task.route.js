import express from "express";
import { getAllTasks, getTaskById, createTask, replaceTask, updateTask, deleteTask } from "../controller/task.controller.js";
import { validateCreateTask, validatePatchTask, validatePutTask, validateTaskId, validateDeleteTask, validateTaskQuery } from "../middleware/validation.js"; 

const router = express.Router();

router.get("/tasks", validateTaskQuery, getAllTasks); // GET /tasks?priority=high or GET /tasks?completed=true
router.get("/tasks/:id", validateTaskId, getTaskById);
router.post("/tasks", validateCreateTask, createTask);
router.put("/tasks/:id", validateTaskId, validatePutTask, replaceTask);
router.patch("/tasks/:id", validateTaskId, validatePatchTask, updateTask);
router.delete("/tasks/:id", validateDeleteTask, deleteTask);

export default router;