import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../common/database/models/user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [SequelizeModule.forFeature([User]), ProductsModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
