module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    forename: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    creditCard: {
      type: Sequelize.STRING(16)
    }
  });

  return User;
};