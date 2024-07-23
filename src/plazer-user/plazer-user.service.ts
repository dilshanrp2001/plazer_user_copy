import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlazerUser } from '../plazer-user/entities/plazer-user.entity';
import { JwtService } from '@nestjs/jwt';
import { CreatePlazerUserDto } from './dto/create-plazer-user.dto';
import * as bcrypt from 'bcrypt';
import { Response, response } from 'express';
import { PlazerUserAuthService } from './plazer-user-auth/plazer-user-auth.service';
// import { Organization } from 'src/organization/entities/organization.entity';

const saltOrRound = 10;

@Injectable()
export class PlazerUserService {
  constructor(
    @InjectRepository(PlazerUser)
    private readonly userRepository: Repository<PlazerUser>,
    private plazerUserAuthService: PlazerUserAuthService,
    private jwtService: JwtService,
    // @InjectRepository(Organization)
    // private readonly organizationRepository: Repository<Organization>
  ) {}

  async createPlazerUser(
    user: CreatePlazerUserDto,
    response: Response,
  ): Promise<Response> {
    try {
      console.log(user);
      const existingUser = await this.userRepository.findOne({
        where: { userName: user.userName },
      });

      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(
          user.userPassword,
          saltOrRound,
        );

        // const organizations = await this.organizationRepository.findBy()
        // if (organizations.length !== user.organizationIds.length) {
        //   return response.status(HttpStatus.BAD_REQUEST).send("Some organizations not found");
        // }

        const newUser = this.userRepository.create({
          ...user,
          userPassword: hashedPassword,
        });

        const result = await this.userRepository.save(newUser);
        console.log(result);
        return response
          .status(HttpStatus.ACCEPTED)
          .send('User has been created');
      } else {
        return response
          .status(HttpStatus.CONFLICT)
          .send('Username already exist');
      }
    } catch (error) {
      console.error(error);
      return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Internal server error');
    }
  }

  async loginPlazerUser(username: string, password: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { userName: username },
      });
      if (!user) {
        console.log('user not found');
        return { status: HttpStatus.NOT_FOUND, message: 'User not found' };
      }

      const isMatch = await bcrypt.compare(password, user.userPassword);
      if (isMatch) {
        console.log('login successful');
        const payload = await this.plazerUserAuthService.signIn(user);
        console.log('payload', payload);
        return {
          status: HttpStatus.ACCEPTED,
          message: 'Login successful',
          payload,
        };
      } else {
        console.log('login error');
        return { status: HttpStatus.CONFLICT, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.log('Internal server error:', error);
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      };
    }
  }
}
