const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({ msg: "No task id find" });
        }
        res.status(200).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
            new:true,
            runValidators: true,
        });
        res.status(200).json({task});
        if (!task) {
            return res.status(404).json({ msg: "No task id find" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findOneAndDelete({ _id: id });
        if (!task) {
            return res.status(404).json({ msg: "No task with this id" });
        }
        res.status(200).json({ task });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
