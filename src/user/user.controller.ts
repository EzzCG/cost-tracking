/* eslint-disable  */
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { User } from '../interfaces/user.interface';

@Controller('user')
export class UserController {
    
  constructor(private userService: UserService){}

  @Get('all')
  getUsers(): Promise<User[]> {
    this.userService.getUsers();
  }

  // @Get(':id')
  // async getUser(@Param() params): Promise<User[]> {
  //   console.log(params.id);
  //   this.userService.get
  // }

  @Post()
  async create(@Body() createUserDto:CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto){
    return 'this action updates a user';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return `This action removes a user`;
  }
}
