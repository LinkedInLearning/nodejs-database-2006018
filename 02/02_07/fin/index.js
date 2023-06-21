const config = require('dotenv').config();
const { SERVER_PORT, ORIGINS } = process.env;

const express = require('express');
const cors = require('cors');

const {routes} = require('./src/routes/routes');


const app = express();

// app.use(cors({ origin: ORIGINS }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));

app.get('/', (req, res) => res.send("<h1>Welcome ...</h1>"));

routes(app);

