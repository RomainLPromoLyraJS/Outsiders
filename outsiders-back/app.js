require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const path = require('path');
const fileUpload = require ('express-fileupload');

const authMiddleware = require('./app/middleware/auth');

const cors = require('cors');
const router = require('./app/routers/router');
const app = express();



app.use(express.json());
app.use(cors('*'));

app.use(express.static(__dirname + '/public'));

//autorise la création d'un nouveau dossier s'il n'existe pas lors de l'upload
app.use(fileUpload({
    createParentPath: true,
    limits: { fileSize: 50 * 1024 * 1024 }
}));

app.post('/upload', function(req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    };

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = __dirname + '/public/' + sampleFile.name;
    console.log(uploadPath);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, function(err) {
        console.log('photo');
        if (err) {
            return res.status(500).send(err)
        };
            res.send('File uploaded!')
    })
});

//app.use(express.static(path.join(_dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true})); //false?
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



app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on :', process.env.PORT);
});