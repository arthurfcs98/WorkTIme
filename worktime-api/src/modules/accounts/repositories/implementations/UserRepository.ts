import { Repository } from 'typeorm';
import { defaultDataSource } from '../../../../database/typeorm';
import { ICreateUser } from '../../dtos/ICreateUser';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = defaultDataSource.getRepository(User);
    }
    async create({
        id,
        name,
        email,
        password,
        hourly_rate,
    }: ICreateUser): Promise<User> {
        const user = this.repository.create({
            id,
            name,
            email,
            password,
            hourly_rate,
        });

        await this.repository.save(user);

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({
            where: {
                id,
            },
        });
        return user;
    }
}

export { UserRepository };
