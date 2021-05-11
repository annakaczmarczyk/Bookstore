module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("books", {
        title: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.STRING
        }
    });
    return Book;
}
