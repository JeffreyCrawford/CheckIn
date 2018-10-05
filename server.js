/* Express setup and router requirements */
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/index"); 
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/db.js");


/* Routing and request configuration */
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

/* router(app, db, nodemailer); */


/* Sync to Sequelize and start listening */

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
    });
});