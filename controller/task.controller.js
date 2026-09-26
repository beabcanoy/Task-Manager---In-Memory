import { tasks } from "../data/tasks.js";

export const getAllTasks = async (req, res) => {
    try {
        const { completed, priority } = req.query;
        let result = tasks;

        if (completed !== undefined) {
            const complete = completed === "true";
            result = result.filter(task => task.completed === complete);
        }

        if (priority !== undefined) {
            result = result.filter(task => task.priority === priority);
        }
        return res.status(200).json({
            success: true,
            message: "Tasks fetched successfully",
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching tasks",
        });
    }
};

export const getTaskById = (req, res) => {
    try {
        const { id } = req.params;
        const task = tasks.find(task => task.id === Number(id));

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Task found successfully",
            data: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching task"
        });
    }
};

export const createTask = (req, res) => {
    try{
        const { title, description, completed, priority } = req.body;

        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            completed: false,
            priority
        };

        tasks.push(newTask);

        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating task"
        });
    };
};

export const replaceTask = (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed, priority } = req.body;
        const task = tasks.find(task => task.id === Number(id));

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        task.title = title;
        task.description = description;
        task.completed = completed;
        task.priority = priority;

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error updating task"
        });
    }
};

export const updateTask = (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed, priority } = req.body;
        const task = tasks.find(task => task.id === Number(id));

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        if (title !== undefined) {
            task.title = title;
        }
        if (description !== undefined) {
            task.description = description;
        }
        if (completed !== undefined) {
            task.completed = completed;
        }
        if (priority !== undefined) {
            task.priority = priority;
        }

        return res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task
        });
        
    } catch (error) {

    };
};

export const deleteTask = (req, res) => {
    try {
        const { id } = req.params;
        const task = tasks.findIndex(task => task.id === Number(id));

        if (task === -1) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        tasks.splice(task, 1);

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error deleting task"
        });
    }
};