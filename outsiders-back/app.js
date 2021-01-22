require('dotenv').config();
console.log(process.env);
const express = require('express');
const cors = require('cors');
const router = require('./app/routers/router');
const app = express();

app.use(express.json());
app.use(cors('*'));
app.use(express.urlencoded({extended: true}))
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on :', process.env.PORT);
});