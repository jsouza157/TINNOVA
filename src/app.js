const express = require('express')
const Routes = require('./app/teste5/routes/routes.js');
const sequelize = require('./app/teste5/config/database.js');

sequelize.sync().then(() => console.log('conectado ao banco')).catch(() => console.log('erro ao conectar ao banco'));

const app = express()
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
});

app.use(Routes);

module.exports = app;