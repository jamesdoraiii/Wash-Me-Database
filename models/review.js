module.exports = function(sequelize, DataTypes){
    return sequelize.define('review', {
      reviewContent: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      numberOfStars: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reviewerFname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      reviewerLname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      detailerFname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      detailerLname: {
        type: DataTypes.STRING,
        allowNull: false
      }



    })
  }