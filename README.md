# DevShop API

The **DevShop API** is a project built using **Node.js, Express.js, Passport.js**, and **PostgreSQL**, designed to simulate the functionality of an e-commerce platform. This API provides a range of features and follows best practices, making it a robust foundation for testing and development purposes.

## Table of Contents:

- [Features](#features)
- [How to Use](#how-to-use)
- [Run locally](#run-locally)
- [License](#license)
- [Author](#author)

### Features

The DevShop API offers the following key features:

- **Sequelize ORM:** Utilizes Sequelize as an Object-Relational Mapping (ORM) tool to interact with the PostgreSQL database efficiently.
- **Express.js Endpoints:** Manages various endpoints using Express.js, facilitating the handling of HTTP requests.
- **Authentication and Authorization:** Implements authentication layers with Passport.js and enforces role-based authorization using JSON Web Tokens (JWT) to identify users.
- **Clean Architecture:** Follows The Clean Architecture principles to maintain a well-structured and maintainable codebase.
- **Middleware Usage:** Employs middleware to execute request validations and capture errors, including custom error handling using Boom. Joi is used to validate incoming request data to ensure it adheres to predefined schemas.

### How to Use

To interact with the DevShop API, please read it's self hosted documentation: [SwaggerDocs](https://devshop-api-1gc5.onrender.com/api-docs/).

### Run locally

1. Clone the repository: `git clone https://github.com/Lenoxo/DevShop.git` or use SSH.
2. Install the dependencies: `npm install`
3. Create a `.env` file in the root directory and following the variables provided in `.env.example` file:
4. Run the docker processes with: `docker compose up postgres pgadmin`
5. Run the migrations until you finish: `npm run migrations:run`
6. Run the development server: `npm run dev`
7. Navigate to `http://localhost:3000/api-docs/` to view the SwaggerDocs.

### License

This project is licensed under the [MIT License](LICENSE).

### Author

Lenoxo (Emanuel Padilla)

Feel free to reach out to me at [emanuehl159@gmail.com](mailto:emanuehl159@gmail.com) for any inquiries, suggestions, or comments.
