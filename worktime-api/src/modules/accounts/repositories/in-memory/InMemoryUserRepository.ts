import { ICreateUser } from '../../dtos/ICreateUser';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

class InMemoryUserRepository implements IUserRepository {
    users: User[] = [];

    async create({
        id,
        name,
        email,
        password,
        hourly_rate,
    }: ICreateUser): Promise<User> {
        const user = new User();

        Object.assign(user, {
            id,
            name,
            email,
            password,
            hourly_rate,
        });

        this.users.push(user);

        return user;
    }

    async findById(id: string): Promise<User> {
        return this.users.find(user => user.id === id);
    }
}

export { InMemoryUserRepository };
