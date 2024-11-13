import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//config
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

//Middlewares
app.use(bodyParser.json({ limit: '50mb' }));





app.listen(PORT,()=>{console.log(`Server started at port ${PORT}`);})