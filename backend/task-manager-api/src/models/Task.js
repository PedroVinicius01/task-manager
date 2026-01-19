const db = require("../config/database");

class Task {
  static async create(title, userId) {
    const query =
      "INSERT INTO tasks (title, user_id) VALUES (?, ?)";
    const [result] = await db.execute(query, [title, userId]);
    return result.insertId;
  }

  static async findByUser(userId) {
    const query =
      "SELECT * FROM tasks WHERE user_id = ?";
    const [rows] = await db.execute(query, [userId]);
    return rows;
  }

  static async update(id, title, completed, userId) {
    const query =
      "UPDATE tasks SET title = ?, completed = ? WHERE id = ? AND user_id = ?";
    await db.execute(query, [title, completed, id, userId]);
  }

  static async delete(id, userId) {
    const query =
      "DELETE FROM tasks WHERE id = ? AND user_id = ?";
    await db.execute(query, [id, userId]);
  }
}

module.exports = Task;
