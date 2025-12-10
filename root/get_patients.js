const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "emergency_waitlist"
});

app.get('/patients', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM patients');
        res.json(result.rows);
        client.release();
    } catch (err) {
        console.error('Database error', err.stack);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
