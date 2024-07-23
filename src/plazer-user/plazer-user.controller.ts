import {
  Controller,
  Get,
  Post,
  HttpStatus,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlazerUserService } from './plazer-user.service';
import { CreatePlazerUserDto } from './dto/create-plazer-user.dto';

import { Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('plazer-user')
export class PlazerUserController {
  constructor(private plazerUserService: PlazerUserService) {}

  @Post('plazer-userReg')
  createplazerUser(
    @Body() user: CreatePlazerUserDto,
    @Res() response: Response,
  ) {
    console.log('body', user);
    return this.plazerUserService.createPlazerUser(user, response);
  }

  @Post('plazer-userLogin')
  async loginUser(
    @Body() credential: { username: string; password: string },
    @Res() response: Response,
  ) {
    try {
      const result = await this.plazerUserService.loginPlazerUser(
        credential.username,
        credential.password,
      );
      console.log('result', result);
      return response.json(result);
    } catch (error) {
      console.error('Unexpected error:', error);
      return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Internal server error');
    }
  }
}
