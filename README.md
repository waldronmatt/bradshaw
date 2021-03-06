# bradshaw (work-in-progress)

[![Netlify Status](https://api.netlify.com/api/v1/badges/196c079f-cddd-4a20-8c56-7853e9d01e71/deploy-status)](https://app.netlify.com/sites/bradshaw/deploys)

A full stack TypeScript application using OOP and MVC patterns. [Click here to see it live on Netlify](https://bradshaw.netlify.app).

## Purpose

Learn about common architecture patterns and apply them by developing a real-world application.

## Fork and Launch

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/waldronmatt/bradshaw)

## Installation
        
Install dependencies:

        npm install

## Usage

### Development server

Run dev environment:

        npm run dev

### Production build

Build and serve for production:

        npm run build

### Other commands

Run the server

        npm run serve

Create webp images:

        npm run optimize

Run all tests:

        npm run test

Visualize Webpack output

        npm run analyze

## Objectives

- Utilize a 3-tier/MVC combination to promote separation of concerns and loose decoupling
- Implement architecture patterns using vanilla TypeScript
- Have at least 50% code coverage
- Implement user authentication
- Store and retrieve data using SQL
- Automate the bundling process and app deployment using Webpack and Netlify

## Stack

- PETN stack (PostgreSQL, Express, TypeScript, Node.js)

## Technologies

- EJS/HTML for markup templates and metadata injection
- Sass for scalable styling
- TypeScript for user interface, business, and controller logic
- Express for server configuration and routing
- Node.js for authentication and data access logic
- PostgreSQL for data storage, modification, and retrieval.
- Webpack and associated technologies for bundling and serving

## Contributing

This is a work-in-progress project. Pull requests are welcome when more development is complete.

## License

MIT

## Credits

- Code refactored from Java to TypeScript/Node.js using Object-Oriented Application Development Using Java Source Code (ISBN-13: 978-0619035655).
- [Student Source Code available here](https://github.com/waldronmatt/object-oriented-application-development-using-java-student-source-code).
- Webpack boilerplate cloned from [Mixpack](https://github.com/waldronmatt/mixpack)
