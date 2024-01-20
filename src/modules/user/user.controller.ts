import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { ResponseMessage } from '../../common/decorators/response.decorator';
import { RESPONSE_MESSAGE } from '../../common/constants';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ResponseMessage(RESPONSE_MESSAGE.APP.SUCCESS)
  @Post()
  async create(@Body() payload: CreateUserDto) {
    return await this.userService.create(payload);
  }

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.userService.getById(id);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    return await this.userService.deleteById(id);
  }

  @Post(':userId/orders/:productId')
  async addProductToUserOrder(
    @Param('userId') userId: number,
    @Param('productId') productId: number,
  ) {
    return await this.userService.addProductToUserOrder(userId, productId);
  }
}
