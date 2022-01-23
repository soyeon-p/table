const Sequelize = require('sequelize');

module.exports = class Calendar extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      schedule: {
        type: Sequelize.STRING(20),
        allowNull: true, //notnull
        unique: true,
      },
      start: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      finish: {
        type: Sequelize.TIME,
        allowNull: true,
      },
     
    }, { //모델에 대한 설정
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'Calendar',
      tableName: 'calendars',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  
};