import express, { Application, Request, Response } from "express";
import http from 'http';
import "reflect-metadata";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from "helmet";

import router from './router';
import connectDB from './config/db';
import { errorHandler, notFound } from "./middlewares/ErrorMiddleware";


const app: Application = express();
connectDB();

app.use(cors({
  credentials: true,
}));
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());


// Custom Middleware
app.use(notFound);
app.use(errorHandler);


const server = http.createServer(app);

server.listen(8080, () => {
  console.log('***********Database connected************')
  console.log('Server running on http://localhost:8080/');
  console.log('                                            ')
});



app.use('/', router());
