import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

/* ───── Routes ───── */
app.get('/users', async (_req, res) => {
  const { rows } = await pool.query('SELECT * FROM users');
  return  res.json(rows);x
});

app.post('/users', async (req, res) => {
  const { email, type } = req.body;
  const query = 'INSERT INTO users (email, type) VALUES ($1,$2) RETURNING *';
  const { rows } = await pool.query(query, [email, type]);
  return res.status(201).json(rows[0]);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API ready on :${PORT}`));
