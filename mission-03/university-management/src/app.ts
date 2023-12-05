import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { notFound } from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './routes';
import config from './config';

// app initialization
const app = express();

// route logs
if (config.node_env === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan connected..");
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// API routes
app.use('/api/v1', router);

// general response
app.get('/', (req, res) => {
  return res.status(200).json({ success: true, message: "You're Welcome💥" })
})

// Global error handle
app.use(globalErrorHandler)

// handle unknown api
app.use(notFound)


export default app;