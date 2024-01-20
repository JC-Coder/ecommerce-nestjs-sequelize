import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto, UpdateProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async create(@Body() payload: CreateProfileDto) {
    return await this.profileService.create(payload);
  }

  @Get()
  async getProfiles() {
    return await this.profileService.getProfiles();
  }

  @Patch(':id')
  async updateProfile(
    @Param('id') id: string,
    @Body() payload: UpdateProfileDto,
  ) {
    return await this.profileService.updateProfile(id, payload);
  }
}
