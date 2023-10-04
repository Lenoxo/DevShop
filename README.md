# DevShop API

The **DevShop API** is a project built using Node.js, Express.js, Passport.js, and PostgreSQL, designed to simulate the functionality of an e-commerce platform. This API provides a range of features and follows best practices, making it a robust foundation for testing and development purposes.

## Table of Contents:

- [Features](#features)
- [How to Use](#how-to-use)
- [Future Plans](#future-plans)

### Features

The DevShop API offers the following key features:

- **Sequelize ORM:** Utilizes Sequelize as an Object-Relational Mapping (ORM) tool to interact with the PostgreSQL database efficiently.
- **Express.js Endpoints:** Manages various endpoints using Express.js, facilitating the handling of HTTP requests.
- **Authentication and Authorization:** Implements authentication layers with Passport.js and enforces role-based authorization using JSON Web Tokens (JWT) to identify users.
- **Clean Architecture:** Follows The Clean Architecture principles to maintain a well-structured and maintainable codebase.
- **Middleware Usage:** Employs middleware to execute request validations and capture errors, including custom error handling using Boom. Joi is used to validate incoming request data to ensure it adheres to predefined schemas.

### How to Use

To interact with the DevShop API, follow these steps:

1. Access the deployed API at its URL.

2. You can make requests to the following primary endpoints:

   - `/auth/login`
     - Here, you can log in by sending a JSON-formatted request with the email and password of an existing user. Upon successful login, you will receive a token that can be used to authorize requests to protected endpoints.
   - `/products || /products/:id`
     - Here, you can retrieve a list of products, create new products, update existing products, or delete products.
   - `/categories || /categories/:id`
     - You can obtain a list of categories, create new categories, update existing categories, or delete categories.
   - `/orders || /orders/:id`
     - This endpoint allows you to retrieve a list of orders, which are associated with both a user and a customer. You can also create, update, or delete orders, as well as manage the products listed within them, including their quantities.
   - `/users || /users/:id`
     - Here, you can access a list of users, which are linked to a customer. You can create, update, or delete users.
   - `/profile/my-orders`
     - This endpoint provides a list of orders associated with the user using the current token.
   - `/profile/recovery && /profile/change-password`
     - You can generate a recovery token and use it to change the password for an existing user.

### Future Plans

In the future, we plan to enhance the DevShop API by providing comprehensive documentation using tools like Swagger or similar platforms. This documentation will offer detailed guidance on how to use each endpoint, making it easier for developers to interact with the API and build applications on top of it. Stay tuned for updates!
