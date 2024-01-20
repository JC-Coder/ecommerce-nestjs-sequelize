import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from '../../common/database/models/profile.model';
import { CreateProfileDto } from './dto/profile.dto';
import { User } from '../../common/database/models/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(Profile) private profileModel: typeof Profile,
    private userService: UserService,
  ) {}

  async create(payload: CreateProfileDto): Promise<Profile> {
    const { userId, bio } = payload;

    const user = await this.userService.getById(userId);

    if (!user) {
      throw new NotFoundException(`User not found `);
    }

    const [profile] = await this.profileModel.upsert(
      { userId, bio },
      { returning: true },
    );

    return profile;
  }

  async getProfiles(): Promise<Profile[]> {
    return await this.profileModel.findAll({ include: [User] });
  }
}
