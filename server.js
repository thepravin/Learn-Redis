const express = require('express');
const axios = require('axios');
const app = express();
const client = require('./client');

app.listen(9000, () => {
    console.log("Server running on : 9000");
});

app.get('/', async (req, res) => {
    try {
        const cacheValue = await client.get('todos');

        if(cacheValue)return res.json(JSON.parse(cacheValue));

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

        await client.set("todos",JSON.stringify(data));
        await client.expire("todos",30);

        return res.json(data);
    } catch (err) {
        console.error("Error fetching data:", err.message);
        return res.status(500).json({ error: "Failed to fetch data" });
    }
});
