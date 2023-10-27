import { usersService } from '../service/usersService';
import { authService } from '../service/authService';

export const middleware = [authService.middleware, usersService.middleware];
