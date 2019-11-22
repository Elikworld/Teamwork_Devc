import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import {homeRouter} from './routes';

dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: 'false'}));
app.use(morgan('dev'));
app.use(cors());



const baseRoute = '/teamwork';

//connect to routes
app.use(`${baseRoute}/`, homeRouter);

export default app;