const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors({
  origin: ["https://accredian-frontend-task-oth9.vercel.app "],
        methods: ["POST", "GET"],
        credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]

}));

app.use(bodyParser.json());
app.use('/api', referralRoutes);


module.exports = app;
