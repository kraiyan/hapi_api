import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or your preferred dialect
});

export default sequelize;