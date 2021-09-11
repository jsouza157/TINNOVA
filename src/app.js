const express = require('express')
const Routes = require('./routes');
const app = express()
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});

app.use(Routes);

module.exports = app;