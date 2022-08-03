import { User } from '../../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
    email: string;
    password: string;
    name: string;
    hourly_rate: number;
}
class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute({
        email,
        hourly_rate,
        name,
        password,
    }: IRequest): Promise<User> {
        const user = await this.userRepository.create({
            email,
            hourly_rate,
            name,
            password,
        });

        return user;
    }
}

export { CreateUserUseCase };
