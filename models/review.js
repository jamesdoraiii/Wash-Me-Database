module.exports = function(sequelize, DataTypes){
    return sequelize.define('review', {
      idOfReviewer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      idOfDetailerBeingReviewed: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      reviewContent: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      numberOfStars: {
        type: DataTypes.INTEGER,
        allowNull: false
      }

    })
  }