'use strict';
const bcyrpt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('users', [
       {
        name: 'testing',
        profession: "Admin Micro",
        role: "admin",
        email: "mricky.it@gmail.com",
        password: await bcyrpt.hash('Rahasia123!',10),
        created_at: new Date(),
        updated_at: new Date()
       },
       {
        name: 'Yein',
        profession: "Front End Developer",
        role: "student",
        email: "fe.it@gmail.com",
        password: await bcyrpt.hash('Rahasia123!',10),
        created_at: new Date(),
        updated_at: new Date()
       }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
