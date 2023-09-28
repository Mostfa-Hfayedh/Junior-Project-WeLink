const express = require("express");
const linksRoute = require('./routes/links.route')
const usersRoute = require('./routes/users.route')
require('../database/index')
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));

app.use('/api/users',usersRoute)
app.use('/api/links',linksRoute)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });