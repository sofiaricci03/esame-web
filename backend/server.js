
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./forum.db');

db.run(\`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  surname TEXT,
  email TEXT,
  username TEXT UNIQUE,
  password TEXT
)\`);

app.post('/api/auth/register', async (req, res) => {
  const { name, surname, email, username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.run(\`INSERT INTO users (name, surname, email, username, password) VALUES (?, ?, ?, ?, ?)\`,
    [name, surname, email, username, hash], function(err) {
      if (err) return res.status(400).json({ error: "Username già in uso" });
      res.json({ success: true });
    });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  db.get(\`SELECT * FROM users WHERE username = ?\`, [username], async (err, user) => {
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Credenziali non valide" });
    }
    const token = jwt.sign({ id: user.id, username: user.username }, 'secret');
    res.json({ token });
  });
});

app.get('/api/recipes', (req, res) => {
  res.json([{ title: "Carbonara", author: "Anna" }]);
});

app.listen(3000, () => console.log("Server in ascolto su http://localhost:3000"));
