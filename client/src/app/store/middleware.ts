import { authService } from '../service/auth';

export const middleware = [authService.middleware];
