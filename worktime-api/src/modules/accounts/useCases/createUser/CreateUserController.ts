import { Request, Response } from 'express';
import { IUserRepository } from '../../repositories/IUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        await this.createUserUseCase.execute(data);

        return response.status(201).send();
    }
}
export { CreateUserController };
