const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Basic Swagger definition
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Node.js API',
        version: '1.0.0',
        description: 'API documentation for the Node.js project',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server (HTTP)',
        },
        {
            url: 'https://localhost:3443',
            description: 'Development server (HTTPS)',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js', './controllers/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec,
};
