module.exports = function(sequelize, DataTypes){
    return sequelize.define('contact', {
      
      detailerFname: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      detailerLname: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    })
}