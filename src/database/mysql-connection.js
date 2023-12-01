const {Sequelize} = require('sequelize');
const sequelize = new Sequelize({
    dialect: "mysql",
    host: 'localhost',
    database: 'todo_app',
    username: 'root',
    password: 'root',
});

(async() => {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.'); 
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();



module.exports = sequelize