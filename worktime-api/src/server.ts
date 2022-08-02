import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { defaultDataSource } from './database/typeorm/index';
import cors from 'cors';

defaultDataSource
    .initialize()
    .then(() => console.log('Database Connected!!'))
    .catch(err => console.error(err));

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.listen(5001, () => console.log('Server is running on port 5001'));
