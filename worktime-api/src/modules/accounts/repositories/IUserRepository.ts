import { ICreateUser } from '../dtos/ICreateUser';
import { User } from '../entities/User';

interface IUserRepository {
    findById(id: string): Promise<User>;
    create({
        id,
        name,
        email,
        password,
        hourly_rate,
    }: ICreateUser): Promise<User>;
}

export { IUserRepository };
