import express from 'express';
import cors from 'cors';
import apiRouters from './routes';
import { notFound } from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';

// app initialization
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use('/api/v1', apiRouters);

// general response
app.get('/', (req, res) => {
  return res.status(200).json({ success: true, message: "You're Welcome💥" })
})

// Global error handle
app.use(globalErrorHandler)

// handle unknown api
app.use(notFound)


export default app;