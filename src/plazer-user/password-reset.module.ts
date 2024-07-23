import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasswordResetService } from './password-reset.service';
import { PasswordResetController } from './password-reset.controller';
import { PasswordReset } from '../plazer-user/entities/password-reset.entity';
import { MailService } from './mail.service';
import { PlazerUser } from '../plazer-user/entities/plazer-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PasswordReset, PlazerUser])],
  providers: [PasswordResetService, MailService],
  controllers: [PasswordResetController],
})
export class PasswordResetModule {}
