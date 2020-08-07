import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.json([
        {"name": "Rodrigo", "age": 37},
        {"name": "Carla", "age": 38},
        {"name": "Alicia", "age": 8},
    ]);
});

app.listen(3333);