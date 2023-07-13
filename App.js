const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3005;

mongoose.connect(process.env.DATABASE_URI);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

app.use(express.json());

const userRouter = require('./Routes/Server');
app.use('/user', userRouter);

app.listen(3005, () => console.log(`Server is listening on port ${port}`));