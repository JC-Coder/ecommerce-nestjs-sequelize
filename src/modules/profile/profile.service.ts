import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Profile } from '../../common/database/models/profile.model';
import { CreateProfileDto, UpdateProfileDto } from './dto/profile.dto';
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

    const existingProfile = await this.profileModel.count();

    if (existingProfile > 0) {
      throw new UnprocessableEntityException(
        'Profile exist for user with id : ' + userId,
      );
    }

    return await this.profileModel.create({ userId, bio });
  }

  async getProfiles(): Promise<Profile[]> {
    return await this.profileModel.findAll({ include: [User] });
  }

  async updateProfile(id: string, payload: UpdateProfileDto): Promise<void> {
    const { firstName, lastName, bio } = payload;

    await this.profileModel.update(
      { firstName, lastName, bio },
      {
        where: {
          id,
        },
      },
    );
  }
}
