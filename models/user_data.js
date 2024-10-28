// models/User.js
import { DataTypes} from 'sequelize';
import sequelize from "./index.js"; // Note the .js extension


const User_data = sequelize.define('User_data', {
     user_id: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    },
    Personal_income: {
        type: DataTypes.NUMBER,
     },
    professional_income: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
});

export default User_data;
