import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors

import Connection from './database/db.js';
import DefaultData from './default.js';
import router from './routes/route.js'; // Ensure this is correctly imported

const app = express();

dotenv.config();

// Step 1: Updated CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-csrf-token'],
  credentials: true, // Allow cookies to be sent with the requests
}));

app.use(express.json()); // To parse JSON bodies

// Step 2: Handle preflight requests across the board
app.options('*', cors());

app.use('/', router);

const PORT = 3001;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();
