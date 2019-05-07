module.exports = function(sequelize, DataTypes){
    return sequelize.define('contact', {
      // useridofcustomer: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      // useridofdetailer: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    })
}