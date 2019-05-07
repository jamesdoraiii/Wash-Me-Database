const Sequelize = require('sequelize');

const sequelize = new Sequelize('washmedatabase', 'postgres', 'password', {
    host: 'localhost', 
    dialect: 'postgres'  
});

sequelize.authenticate().then(
    function() { 
        console.log('Connected to washme postgres database');
    },
    function(err){ 
        console.log(err);
    }
);

const User = sequelize.import('./models/user');
const Detailer = sequelize.import('./models/detailer');
const Review = sequelize.import('./models/review');
const Contact = sequelize.import('./models/contact');

// Associations

User.hasOne(Detailer);
Detailer.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Detailer.hasMany(Review);
Review.belongsTo(Detailer);

User.hasMany(Contact);
Contact.belongsTo(User);

Detailer.hasMany(Contact);
Contact.belongsTo(Detailer);
                 
module.exports = sequelize;