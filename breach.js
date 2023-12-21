const express = require('express')
const { Pool } = require('pg')
const app = express()

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'breach',
    password: 'admin',
    port: 5432,
})

app.get('/users', async (req, res) => {
    try {
        const userId = req.query.id // User input from query parameter
        const query = `SELECT * FROM users WHERE id = ${userId}`
        const { rows } = await pool.query(query)
        res.json(rows)
    } catch (err) {
        res.status(500).send('Server error')
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})