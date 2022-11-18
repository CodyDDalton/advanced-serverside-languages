'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn('Variants', 'slug', { type: Sequelize.STRING,
    //   defaultValue:'',
    //   allowNull:false})
    // await queryInterface.addColumn('Variants', 'description', { type: Sequelize.TEXT('long'),
    //   defaultValue:'',
    //   allowNull:true})
    // await queryInterface.addColumn('Variants', 'price', { type: Sequelize.FLOAT,
    //   defaultValue:0,
    //   allowNull:false})
    await queryInterface.addColumn('Variants', 'inventory', { type: Sequelize.INTEGER,
      defaultValue:0,
      allowNull:false})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //  await queryInterface.Column('Variants', 'slug', { type: Sequelize.STRING,
    //   defaultValue:'',
    //   allowNull:false})
    // await queryInterface.Column('Variants', 'description', { type: Sequelize.TEXT('long'),
    //   defaultValue:'',
    //   allowNull:true})
    // await queryInterface.Column('Variants', 'price', { type: Sequelize.FLOAT,
    //   defaultValue:0,
    //   allowNull:false})
    await queryInterface.Column('Variants', 'inventory', { type: Sequelize.INTEGER,
      defaultValue:0,
      allowNull:false})
  }
};
