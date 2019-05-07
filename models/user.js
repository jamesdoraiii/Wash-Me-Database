module.exports = function(sequelize, DataTypes){
    return sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      passwordhash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      fName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isDetailer: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }

    })
  }