import connection from "../config/db.js";

class Album {
  constructor() {
    this.table = "albums";
  }

  create({ data }) {
    const { artist_id, name, realese_date } = data;
    const result = connection.query(`INSERT INTO ${this.table} (artist_id, name, realese_date) VALUES (?, ?, ?)`, [artist_id, name, realese_date]);
    return result.rows[0];
  }

  getAlbums() {
    const result = connection.query(`SELECT a.alias, al.name FROM artist a INNER JOIN albums al ON a.artist_id=al.artist_id`);
    return result.rows;
  }
  
  getArtistAlbum({ artist_id }) {
    const result = connection.query(`SELECT a.alias, al.name FROM artist a INNER JOIN albums al ON a.artist_id = al.artist_id WHERE a.artist_id = ?`, [artist_id]);
    return result.rows;
  }

  getTracksAlbum({ album_id }) {
    const result = connection.query(`SELECT t.* FROM tracks t LEFT JOIN albums a ON t.album_id=a.album_id WHERE album_id = ?`, [album_id]);
    return result.rows;
  }

  updateNameAlbum({ name, album_id }) {
    const result = connection.query(`UPDATE ${this.table} SET name = ? WHERE album_id = ?`, [name, album_id]);
    return result.rows[0];
  }

  delete({ album_id }) {
    const result = connection.query(`DELETE FROM ${this.table} WHERE album_id = ?`, [album_id]);
    return result.rowCount;
  }
}