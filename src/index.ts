import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import cryptoRoutes from './routes/cryptoRoutes';
import alertRoutes from './routes/alertRoutes';
import setupSocketServer from './sockets/socketServer';
import http from 'http';

dotenv.config();

const app = express();
const server = http.createServer(app);


const io = setupSocketServer(server);


connectDB();


app.use(express.json());

// Routes
app.use('/api/crypto', cryptoRoutes);
app.use('/api/alerts', alertRoutes);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
