require('dotenv').config();
const express = require('express');
const app = express();
const user = require('./controllers/usercontroller');
const event = require('./controllers/eventcontroller');
const userVali= require('./controllers/uservalicontroller');
const Attend = require('./controllers/attendingcontroller');
const sequelize = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
sequelize.sync();
app.use(require('./middleware/headers'));

app.use('/user', user);
app.use(require('./middleware/validate_session'));
app.use('/event', event);
app.use('/userinfo', userVali);
app.use('/attending', Attend);

app.listen(process.env.PORT, function () {
    console.log(`listening on ${process.env.PORT}`)
})