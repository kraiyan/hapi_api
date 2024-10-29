// server.js
import Hapi from '@hapi/hapi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import sequelize from './models/index.js'; // Import Sequelize
import User from './models/user.js';
import User_data from './models/user_data.js';

const users = []; // This will hold users in memory for demonstration.

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    // await sequelize.sync();
    const userSchema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
    });
    // Define routes here\
    server.route({
        method: 'GET',
        path: '/',
        handler: async (req, res) => {
            return h.response({ message: 'Server running' }).code(201);
        },
    });
    server.route({
        method: 'POST',
        path: '/users',
        handler: async (request , h) => {
            try {
                
                if(!request.payload){
                    return h.response({ message: "Username and passwords are required" }).code(400);
                }
                const { error } = userSchema.validate(request.payload);
                    if (error) {
                       
                        return h.response({ message: error.details[0].message }).code(400); // Bad Request
                    }
                const { username, password } = request.payload;
                const hashedPassword = await bcrypt.hash(password, 10); // encrypting the password using bcrypt  package 
                const user = { username, password: hashedPassword };

                // let userCreated= await User.create(request.payload); // this line will  new create user in the  production database with encrypted passwords
                // await User_data.create({
                //     user_id:userCreated.id,
                //     personal_income: request.payload.personal_income,
                //     professional_income:request.payload.professional_income
                // })
                 // Note :The above is commented due to unavailablity of server database for production
                users.push(user); // Save to in-memory array
               
                return h.response({ message: 'User created',users:users }).code(201);
            } 
            //handling of empty payload
            catch (error) {
                //error handling of database 
                return h.response({ message: error}).code(500);
                
            }
        },
    });
    await server.start();
   
};

process.on('unhandledRejection', (err) => {
    process.exit(1);
});

init();
