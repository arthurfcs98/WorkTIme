import { Request, Response } from 'express';
import { IUserRepository } from '../../repositories/IUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    constructor(private userRepository: IUserRepository) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const createUserUseCase = new CreateUserUseCase(this.userRepository);

        await createUserUseCase.execute(data);

        return response.status(201).send();
    }
}
