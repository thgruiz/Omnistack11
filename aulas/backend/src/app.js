const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');1

const app = express();


app.use(cors());

//example on how to allow only specifics calls to my backend
// app.use(cors({
//   origin: 'http://myapp.com'
// }));

//converts all the requests to the app to json
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;

