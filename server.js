const express = require('express');
const axios = require('axios');
const app = express();

app.listen(9000, () => {
    console.log("Server running on : 9000");
});

app.get('/', async (req, res) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return res.json(data);
    } catch (err) {
        console.error("Error fetching data:", err.message);
        return res.status(500).json({ error: "Failed to fetch data" });
    }
});
