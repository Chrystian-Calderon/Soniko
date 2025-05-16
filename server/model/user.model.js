import connection from "../config/db.js";

class User {
  constructor() {
    this.table = "users";
  }

  create({ data }) {
    const { user_id, role, email, avatar_path } = data;
    const result = connection.query(`INSERT INTO ${this.table} (user_id, role, email, avatar_path) VALUES (?, ?, ?, ?)`, [user_id, role, email, avatar_path]);
    return result;
  }

  updateEmail({ user_id, email }) {
    const result = connection.query(`UPDATE ${this.table} SET email = ? WHERE user_id = ?`, [email, user_id]);
    return result;
  }
}

export default new User();