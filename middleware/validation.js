export const validateCreateTask = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({
            success: false,
            message: "Title and description are required"
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