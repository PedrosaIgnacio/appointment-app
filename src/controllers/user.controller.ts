import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  Req,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/business/user.service';
import AuthenticateDTO from 'src/dto/authenticate.dto';
import CreateUserDTO from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/auth/login')
  async login(@Res() res: Response, @Body() authenticateDTO: AuthenticateDTO) {
    try {
      const user = await this.userService.authenticate(authenticateDTO);
      return res.status(HttpStatus.OK).json({
        user,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Invalid parameters',
        code: HttpStatus.BAD_REQUEST.toString(),
      });
    }
  }

  @Post('/auth/register')
  async register(@Res() res: Response, @Body() createUserDTO: CreateUserDTO) {
    try {
      const user = await this.userService.register(createUserDTO);
      return res.status(HttpStatus.OK).json({
        message: 'User Registered Successfully',
        user,
      });
    } catch (error) {
      console.log(error.message);
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Invalid parameters',
      });
    }
  }
}
