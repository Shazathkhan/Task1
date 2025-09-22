const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello Today is my First Task and I am Automating Code Deployment Using CI/CD Pipeline!'));

app.listen(PORT, () => console.log(`Listening ${PORT}`));
