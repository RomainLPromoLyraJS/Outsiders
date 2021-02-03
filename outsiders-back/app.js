require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const http =require('http');
const io = require('socket.io');
const tripDataMapper = require('./app/dataMappers/categoryDataMapper');


const authMiddleware = require('./app/middleware/auth');

const cors = require('cors');
const router = require('./app/routers/router');
const app = express();

const server = http.createServer(app);
const socketServer = io(server);


app.use(express.json());
app.use(cors('*'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, UPDATE, DELETE');

    if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    }
    else {
        next();
    } 
});

app.get('/json', function (req, res) {
    res.status(200).json({"message":"ok"})
});

// web socket connection
socketServer.on('connection', socket => {
    console.log('>> socket.io - connected');
});
    /* // ws action received
    socket.on('sendMessage', message => {
        console.log('>> message reçu : ', message)

        // save message in db
        (async () => {
            await tripDataMapper.postNewCommentOnThisTrip({ title, content, trip_id } = message, message.user_id)
        });

        // send action
        socket.emit('sendMessage');
        console.log('<< message envoyé');
    }); */



app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on :', process.env.PORT);
});