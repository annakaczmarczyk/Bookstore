const controller = require("../controllers/book.conroller.js")
const { authJwt } = require("../middleware");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });


    app.post("/api/book/addbook", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

    app.get("/api/book/getbooks", controller.getAll);

    app.get("/api/book/:id", controller.findOne);

    app.delete("/api/book/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.delete);
}