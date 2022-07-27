import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();

app.use(cors());



const CONNECTION_URL = 'mongodb://localhost:27017';
const PORT = 5000;



mongoose.connect(CONNECTION_URL)
    .then(() => console.log('Database connected Succesfully'))
    .then(() => app.listen(PORT, () => console.log(`Server running on port :${PORT}`)))
    .catch((error) => console.log(error.message));
