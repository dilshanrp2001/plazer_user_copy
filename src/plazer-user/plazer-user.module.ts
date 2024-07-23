import { Module } from '@nestjs/common';
import { PlazerUserService } from './plazer-user.service';
import { PlazerUserController } from './plazer-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlazerUser } from '../plazer-user/entities/plazer-user.entity';
import { PlazerUserAuthService } from './plazer-user-auth/plazer-user-auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([PlazerUser])],
  controllers: [PlazerUserController],
  providers: [PlazerUserService, PlazerUserAuthService],
  exports: [TypeOrmModule, PlazerUserService],
})
export class PlazerUserModule {}
