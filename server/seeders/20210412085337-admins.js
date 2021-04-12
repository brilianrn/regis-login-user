'use strict';
const { hashPass } = require('../helpers/passHelp');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [{
      "name": "Brilian",
      "email": "brilian@gmail.com",
      "password": hashPass(12345),
      createdAt: new Date(),
      updatedAt: new Date()
    }];
    return queryInterface.bulkInsert('Admins', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
