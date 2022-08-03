import { response, Router } from 'express';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';
import { createUserController } from '../modules/accounts/useCases/createUser';

const router = Router();

router.post('/test', (request, response) =>
    createUserController.handle(request, response),
);

export { router };
