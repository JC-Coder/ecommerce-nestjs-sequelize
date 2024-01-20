import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../common/database/models/user.model';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async create(payload: CreateUserDto): Promise<User> {
    return await this.userModel.create({ ...payload });
  }

  async getById(id: number): Promise<User> {
    return await this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async deleteById(id: number): Promise<void> {
    await this.userModel.destroy({
      where: { id },
    });
  }
}
