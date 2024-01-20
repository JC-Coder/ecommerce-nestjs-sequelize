import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Profile } from '../../common/database/models/profile.model';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SequelizeModule.forFeature([Profile]), UserModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
