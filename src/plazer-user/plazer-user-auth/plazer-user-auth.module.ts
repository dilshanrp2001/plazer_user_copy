import { Module } from '@nestjs/common';
import { PlazerUserAuthController } from './plazer-user-auth.controller';
import { PlazerUserAuthService } from './plazer-user-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './plazer-user-constants';
import { PlazerUserRolesGuard } from './plazer-user-roles.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [PlazerUserAuthController],
  providers: [PlazerUserRolesGuard, PlazerUserAuthService],
  exports: [PlazerUserAuthService],
})
export class PlazerUserAuthModule {}
