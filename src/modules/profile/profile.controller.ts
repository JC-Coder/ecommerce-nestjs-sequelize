import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async create(@Body() payload: CreateProfileDto) {
    return await this.profileService.create(payload);
  }

  @Get()
  async getProfiles() {
    return await this.profileService.getProfiles()
  }
}
