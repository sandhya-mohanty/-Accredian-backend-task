const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "http://localhost:3000 ",
        methods: ["POST", "GET"],
        credentials: true
}));

app.use(bodyParser.json());
app.use('/api', referralRoutes);


module.exports = app;
