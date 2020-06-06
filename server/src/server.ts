import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
// Para fazer com que o express entenda Request Body's em formato JSON
app.use(express.json());
app.use(errors());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3333);