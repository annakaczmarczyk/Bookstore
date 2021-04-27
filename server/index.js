const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "bookstore"
})

app.post('/register', (req, res)=>{
    const email = req.body.email;
    const forename = req.body.forename;
    const surname = req.body.surname;
    const password = req.body.password;

    db.query("INSERT INTO users (email, forename, surname, password) VALUES (?,?,?,?)", 
    [email, forename, surname, password],
    (err, result)=>{
        console.log(err);
    }
    );
});

app.post('/login', (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? AND password =?",
        [email, password],
        (err, result) => {
            if(err) {
                res.send({err: err});
            }

            if(result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password!" });
            }
        }
    );
})



app.listen(3001, () => {
    console.log("running server");
})