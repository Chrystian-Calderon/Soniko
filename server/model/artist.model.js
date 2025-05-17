import connection from "../config/db.js";

class Artist {
  constructor() {
    this.table = "artist";
  }

  create({ data }) {
    const { user_id, alias } = data;
    const result = connection.query(`INSERT INTO ${this.table} (user_id, alias) VALUES (?, ?)`, [user_id, alias]);
    return result.rows;
  }

  updateAlias({ alias, artist_id }) {
    const result = connection.query(`UPDATE ${this.table} SET alias = ? WHERE artist_id = ?`, [alias, artist_id]);
    return result.rows[0];
  }
}

export default new Artist();