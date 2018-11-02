require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// @TODO: use express middleware to handle cookies (JWT)
// and populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details =>
    console.log(
      `Server is now running on port https://localhost:${details.port}`
    )
);
