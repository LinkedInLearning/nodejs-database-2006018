_ = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { SERVER_PORT, ORIGINS } = process.env;
const { routes}  = require('./src/routes/routes')
const app = express();

app.use(cors({ origin: ORIGINS }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(SERVER_PORT, () => console.log(`Running on port ${SERVER_PORT}`));

app.get('/', (req, res) => res.send(" Connected ..."));

routes(app);