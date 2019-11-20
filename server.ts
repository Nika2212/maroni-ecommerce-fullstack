const Application = require('./src/app').Application;
const connectMongoDB = require('./mongo').connectMongoDB;
const dotenv = require('dotenv');

dotenv.config();
connectMongoDB();
Application.App = new Application(process.env.PORT);
