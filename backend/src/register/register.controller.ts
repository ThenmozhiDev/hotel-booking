import { Sort } from '@mui/icons-material';
import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';

import { RegisterService } from './register.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from 'src/Login/dto/login.dto';
@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post('signup')
  async signUp(@Body() createRegisterDto: RegisterDto) {
    try {
      const newUser = await this.registerService.createUser(createRegisterDto);
      return { message: 'User registered successfully', user: newUser };
    } catch (error) {
      throw new BadRequestException(error.message || 'Failed to register user');
    }
  }
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { accessToken } = await this.registerService.login(loginDto);
    return { accessToken };
  }
}
