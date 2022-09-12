const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Хочу домой! И зачет автоматом');
})

app.listen(port, () => {
  console.log(`Server running. Port: ${port}`);
})