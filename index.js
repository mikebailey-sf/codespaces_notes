//https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/

let express = require('express');
let app = express();
let ejs = require('ejs');
let mongoose = require('mongoose');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;
const dbConfig = require('./config/database.config.js');

app.use(express.static('public'))
app.set('view engine', 'ejs');

// Connecting to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});


app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(port);