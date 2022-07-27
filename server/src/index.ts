// Importing the packages
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'


const app = express();

// Connecting with CORS to prevent the request from other API's
app.use(cors());


// Defining a PORT and Connection URL
const CONNECTION_URL = 'mongodb://localhost:27017';
const PORT = 5000;


// Connecting with MongoDB and consoling the connection details
mongoose.connect(CONNECTION_URL)
    .then(() => console.log('Database connected Succesfully'))
    .then(() => app.listen(PORT, () => console.log(`Server running on port :${PORT}`)))
    .catch((error) => console.log(error.message));
