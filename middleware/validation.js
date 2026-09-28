export const validateCreateTask = (req, res, next) => {
    const { title, description, completed, priority } = req.body;

    if (!title || !description || !priority) {
        return res.status(400).json({
            success: false,
            message: "Title, description, and priority are required"
        });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
        return res.status(400).json({
            success: false,
            message: "Completed must be a boolean"
        });
    }

    if (priority !== undefined && !["low", "medium", "high"].includes(priority)) {
        return res.status(400).json({
            success: false,
            message: "Priority must be one of 'low', 'medium', or 'high'"
        });
    }

    next();
};

export const validateUpdateTask = (req, res, next) => {
    const { title, description } = req.body;

    if (title === undefined && description === undefined) {
        return res.status(400).json({
            success: false,
            message: "At least one of title or description must be provided"
        });
    }

    next();
};

export const validateTaskId = (req, res, next) => {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }
    next();
};

export const validateDeleteTask = (req, res, next) => {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    next();
};

export const validateTaskQuery = (req, res, next) => {
    const { completed, priority } = req.query;

    if (completed !== undefined && completed !== "true" && completed !== "false") {
        return res.status(400).json({
            success: false,
            message: "Completed query parameter must be 'true' or 'false'"
        });
    }

    if (priority !== undefined && !["low", "medium", "high"].includes(priority)) {
        return res.status(400).json({
            success: false,
            message: "Priority query parameter must be one of 'low', 'medium', or 'high'"
        });
    }

    next();
};