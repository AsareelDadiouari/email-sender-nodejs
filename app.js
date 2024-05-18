require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const { swaggerUi, swaggerSpec } = require('./swagger');
const https = require('https');
const cors = require('cors');
const credentials = require('./security/security');

const app = express();
const port = 3000;
const httpsPort = 3443;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', indexRouter);

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS Server is running on port ${httpsPort}`);
    console.log(`API docs available at http://localhost:${port}/api-docs`);
});
