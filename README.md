📊 Income Management API Project
Overview
This project is designed to manage different users along with their income details, providing a robust API for data handling and storage. The application uses several modern technologies to ensure security, efficiency, and ease of use.

🛠️ Technologies Used
Hapi: A powerful framework for building APIs, ensuring a robust structure and comprehensive request handling.
Bcrypt: A library for hashing passwords, enhancing security by protecting user credentials.
Jest: A delightful JavaScript testing framework, ensuring that your code is reliable through unit and integration tests.
Sequelize: A promise-based Node.js ORM for SQL databases, simplifying database interactions.
SQL: The structured query language used for managing and querying relational databases.
🗂️ Database Schema
The schema is designed to efficiently store user data and income details. Here’s a simple representation:

plaintext
Copy code
Users Table:
---------------
| user_id      | INT (PK)  |
| username     | VARCHAR    |
| password     | VARCHAR    |
| email        | VARCHAR    |
| created_at   | TIMESTAMP  |
| updated_at   | TIMESTAMP  |

Income Table:
---------------
| income_id    | INT (PK)  |
| user_id      | INT (FK)  |
| amount       | DECIMAL    |
| source       | VARCHAR    |
| date_received | DATE       |
🔒 User Management
Registration: Users can sign up by providing a username, email, and password. The password is hashed using Bcrypt for security.
Authentication: Secure login functionality verifies user credentials and provides authentication tokens for session management.
💰 Income Handling
CRUD Operations: Users can create, read, update, and delete their income records. Each income record is associated with a specific user, ensuring data integrity and privacy.
Data Validation: All incoming data is validated to ensure correctness before being stored in the database.
⚙️ Testing
Unit Tests: Jest is used to write comprehensive unit tests for API endpoints and business logic, ensuring code reliability.
Integration Tests: Test interactions between different parts of the application, confirming the overall functionality works as intended.
🚀 Getting Started
Clone the Repository:

bash
Copy code
git clone https://github.com/kraiyan/hapi_api.git
cd income-management-api
Install Dependencies:
bash
Copy code
npm install
Set Up the Database:

Configure your SQL database and update the connection settings in the .env file.
Run Migrations:

bash
Copy code
npx sequelize-cli db:migrate
Start the Server:

bash
Copy code
npm start
📈 Future Enhancements
User Profiles: Add features for users to update their profiles.
Reporting: Implement reporting features for users to visualize their income trends.
API Documentation: Use tools like Swagger for better API documentation.
