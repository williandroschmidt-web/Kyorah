import pool from "../config/database.js";

export async function createUser({
  name,
  email,
  passwordHash,
  ageGroup,
}) {
  const query = `
    INSERT INTO users (name, email, password_hash, age_group)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, email, age_group, created_at;
  `;

  const values = [
    name,
    email,
    passwordHash,
    ageGroup,
  ];

  const { rows } = await pool.query(query, values);

  return rows[0];
}

export async function findUserByEmail(email) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return rows[0];
}

export async function findUserById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM users WHERE id = $1",
    [id]
  );

  return rows[0];
}