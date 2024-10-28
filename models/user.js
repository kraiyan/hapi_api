// models/User.js
import { DataTypes} from 'sequelize';
import sequelize from "./index.js"; // Note the .js extension


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    fullname: {
        type: DataTypes.STRING,
     },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;
