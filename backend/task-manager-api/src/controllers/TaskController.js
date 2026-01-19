const Task = require("../models/Task");

class TaskController {
  static async create(req, res) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Título é obrigatório" });
    }

    const taskId = await Task.create(title, req.userId);
    return res.status(201).json({ id: taskId, title });
  }

  static async list(req, res) {
    const tasks = await Task.findByUser(req.userId);
    return res.json(tasks);
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;

    await Task.update(id, title, completed, req.userId);
    return res.json({ message: "Tarefa atualizada" });
  }

  static async delete(req, res) {
    const { id } = req.params;

    await Task.delete(id, req.userId);
    return res.json({ message: "Tarefa removida" });
  }
}

module.exports = TaskController;
