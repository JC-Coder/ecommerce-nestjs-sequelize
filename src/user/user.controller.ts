import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { ResponseMessage } from '../decorators/response.decorator';
import { RESPONSE_MESSAGE } from '../constants';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ResponseMessage(RESPONSE_MESSAGE.APP.SUCCESS)
  @Post()
  async create(@Body() payload: CreateUserDto) {
    return await this.userService.create(payload);
  }
}
