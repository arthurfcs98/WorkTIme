import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { defaultDataSource } from './database/typeorm/index';
import cors from 'cors';
import { router } from './routes';

defaultDataSource
    .initialize()
    .then(() => console.log('Database Connected!!'))
    .catch(err => console.error(err));

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);
app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(5001, () => console.log('Server is running on port 5001'));
