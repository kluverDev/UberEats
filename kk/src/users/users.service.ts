import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}
  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<string | undefined> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        //make error message
        return 'there is a user with that email already';
      }
      await this.users.save(this.users.create({ email, password, role }));
    } catch (error) {
      //make error message
      return 'could not create account';
    }
  }
}
