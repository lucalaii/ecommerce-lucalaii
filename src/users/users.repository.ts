import { Injectable } from '@nestjs/common';
import { users } from 'src/db/usersDb';

@Injectable()
export class UsersRepository {
  getAllUsersDb() {
    return users;
  }
}
