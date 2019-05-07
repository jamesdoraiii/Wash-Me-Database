module.exports = function(sequelize, DataTypes){
    return sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      passwordhash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
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