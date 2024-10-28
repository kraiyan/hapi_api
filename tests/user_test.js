// __tests__/userController.test.js
import { createUser, getUser } from '../controllers/userController.js';
import User from '../models/user.js';

jest.mock('../models/User.js'); // Mock the User model

describe('User Controller', () => {
    describe('createUser', () => {
        it('should create a user successfully', async () => {
            const req = {
                body: { username: 'testuser', fullname: 'Test User', password: 'password123' },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            User.create.mockResolvedValue(req.body); // Mock the User.create method
            await createUser(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });

        it('should return an error if user creation fails', async () => {
            const req = {
                body: { username: 'testuser', fullname: 'Test User', password: 'password123' },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.create.mockRejectedValue(new Error('Database error')); // Mock an error

            await createUser(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
        });
    });

    describe('getUser', () => {
        it('should return a user when found', async () => {
            const req = { params: { id: 1 } };
            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };

            User.findByPk.mockResolvedValue({ id: 1, username: 'testuser' }); // Mock user data

            await getUser(req, res);

            expect(res.json).toHaveBeenCalledWith({ id: 1, username: 'testuser' });
        });

        it('should return a 404 error if user not found', async () => {
            const req = { params: { id: 999 } };
            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };

            User.findByPk.mockResolvedValue(null); // Mock user not found

            await getUser(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });

        it('should return a 500 error if an error occurs', async () => {
            const req = { params: { id: 1 } };
            const res = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
            };

            User.findByPk.mockRejectedValue(new Error('Database error')); // Mock an error

            await getUser(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
        });
    });
});
