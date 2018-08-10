const express = require('express')
const app = express()
const axios = require('axios')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
var Schema = mongoose.Schema;
mongoose.connect('mongodb://Admin:Admin504@ds143707.mlab.com:43707/words', {
    useMongoClient: true
});

app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json())

app.get('/', function (req, res) {res.sendFile(__dirname+'/build/index.html')})

app.listen(3000, () => console.log('Yay, I loaded!'))

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("Connected")
});
const words = mongoose.model('ThirdGradeWords',new Schema({ word: String }));


app.get('/getWords', (req, res) => { 
    res.send([{word: 'About'}, {word: "Better"}, {word: "Seven"}, {word: "Pick"}, {word: "Laugh"}
    , {word: "Silly"}, {word: "Together"}, {word: "Telephone"}, {word: "Explain"}, {word: "Wisdom"}])
});

// app.get('/getWords', (req, res) => {
 
// words.find({}, function(err, word) {

//     res.send(word);  
//   });
// })