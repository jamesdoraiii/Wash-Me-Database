module.exports = function(sequelize, DataTypes){
    return sequelize.define('detailer', {
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      linkToImgur: {
        type: DataTypes.STRING,
        allowNull: false
      },
      servicesOffered: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      pricingInformation: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      availability: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      willTravel: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      //FIGURE OUT WHY THIS CANT BE DATA TYPE ARRAY
      cities: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      discoverable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },


    })
  }