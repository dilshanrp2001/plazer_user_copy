import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PlazerUser } from '../entities/plazer-user.entity';

@Injectable()
export class PlazerUserAuthService {
  constructor(private jwtService: JwtService) {}
  async signIn(user: PlazerUser) {
    console.log('user', user);
    const payload = {
      sub: user.userId,
      username: user.userName,
      roles: [user.role],
    };
    return {
      user: payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
