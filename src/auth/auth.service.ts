import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class AuthService {
  getAuth(): string {
    return 'Obtener la autenticacion';
  }
}
