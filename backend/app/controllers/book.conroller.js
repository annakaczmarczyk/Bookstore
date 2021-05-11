const db = require("../models")
const Book = db.book
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const book = new Book({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image
    });

    book
        .save(book)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Book."
            })
        })

};

exports.getAll = (req, res) => {
    Book.findAll()
      .then(book => res.send(book))
      .catch(console.error)
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Book.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Book with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Book with id=" + id });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Book.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };