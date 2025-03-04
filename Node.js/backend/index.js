const express = require('express');
const { sql, poolPromise } = require('./dbConfig');
const app = express();

app.use(express.json());

app.get("/employee", async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('select * from employee_k');
        res.json(result.recordset);
    } catch {
        res.status(500).send(err.massage);
    }
});

app.post("/employee", async (req, res) => {
    try {
        const pool = await poolPromise;
        const { id, name, age, salary, dept_id, city} = req.body; 
        await pool.request()
            .input('employee_id', id)
            .input('employee_name', name)
            .input('age', age)
            .input('salary', salary)
            .input('department_id', dept_id)
            .input('city', city)
            .query('INSERT INTO employee_k (employee_id, employee_name, age, salary, department_id, city) VALUES (@employee_id, @employee_name, @age, @salary, @department_id, @city)');
        res.status(201).send('Employee added successfully.');
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.listen(3000, () => {
    console.log('Server Ruuning on http://localhost:3000');
});
