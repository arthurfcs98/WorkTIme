import { DataSource } from 'typeorm';

export const defaultDataSource = new DataSource({
    type: 'postgres',
    port: 65432,
    host: 'localhost',
    username: 'docker',
    password: 'worktime2022',
    database: 'worktime',
    entities: ['./src/modules/**/entities/*.ts'],
    migrations: ['./src/database/typeorm/migrations/*.ts'],
});
