const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = require("./app/models");
const { user } = require("./app/models");
const Role = db.role;

db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/auth.routes')(app);
require('./app/routes/book.routes')(app);
require('./app/routes/user.routes')(app);


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });

  user.create({
    id: 1,
    username: "admin",
    password: "admin",
    Role: ["admin"]
  })
}

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

