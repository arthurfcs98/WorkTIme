import { InMemoryUserRepository } from '../../repositories/in-memory/InMemoryUserRepository';
import { IUserRepository } from '../../repositories/IUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

let userRepository: IUserRepository;
let createUserUseCase: CreateUserUseCase;
describe('Create User', () => {
    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
        createUserUseCase = new CreateUserUseCase(userRepository);
    });
    it('Should be able to createa new user', async () => {
        const user = await createUserUseCase.execute({
            name: 'Jose Fletcher',
            email: 'ahe@fef.so',
            password: '4274858290',
            hourly_rate: 80,
        });

        expect(user).toHaveProperty('id');
    });
});
