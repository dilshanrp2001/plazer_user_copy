import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, QueryFailedError } from 'typeorm';
import { PasswordReset } from '../plazer-user/entities/password-reset.entity';
import { CreatePasswordResetDto } from '../plazer-user/dto/create-password-reset.dto';
import { VerifyOtpDto } from '../plazer-user/dto/verify-otp.dto';
import { UpdatePasswordDto } from '../plazer-user/dto/update-password.dto';
import { MailService } from './mail.service';
import { PlazerUser } from '../plazer-user/entities/plazer-user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordResetService {
  constructor(
    @InjectRepository(PasswordReset)
    private passwordResetRepository: Repository<PasswordReset>,
    @InjectRepository(PlazerUser)
    private userRepository: Repository<PlazerUser>,
    private mailService: MailService,
  ) {}

  async requestOtp(
    createPasswordResetDto: CreatePasswordResetDto,
  ): Promise<void> {
    const { email } = createPasswordResetDto;

    const user = await this.userRepository.findOne({ where: { Email: email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const otp = Math.random().toString(36).substring(2, 8).toUpperCase();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    let passwordReset: PasswordReset;

    try {
      passwordReset = await this.passwordResetRepository.findOne({
        where: {
          userId: user.userId.toString(),
        },
      });

      if (passwordReset) {
        passwordReset.otp = otp;
        passwordReset.expiresAt = expiresAt;
        passwordReset.used = false;
        await this.passwordResetRepository.save(passwordReset);
      } else {
        passwordReset = this.passwordResetRepository.create({
          userId: user.userId.toString(),
          otp,
          expiresAt,
          used: false,
        });
        await this.passwordResetRepository.save(passwordReset);
      }
    } catch (error) {
      console.log(error);
      if (
        error instanceof QueryFailedError &&
        error.message.includes('duplicate key value violates unique constraint')
      ) {
        throw new BadRequestException(
          'An OTP request already exists for this user. Please try again later.',
        );
      }
      throw error;
    }
    await this.mailService.sendOtp(email, otp);
  }
  async verifyOtp(verifyOtpDto: VerifyOtpDto): Promise<void> {
    const { email, otp } = verifyOtpDto;

    const user = await this.userRepository.findOne({ where: { Email: email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordReset = await this.passwordResetRepository.findOne({
      where: { userId: user.userId.toString(), otp, used: false },
    });
    console.log(user.userId, otp);
    console.log(passwordReset);
    if (!passwordReset || passwordReset.expiresAt < new Date()) {
      throw new BadRequestException('Invalid or expired OTP');
    }

    passwordReset.used = true;
    await this.passwordResetRepository.save(passwordReset);
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto): Promise<void> {
    const { email, newPassword } = updatePasswordDto;

    const user = await this.userRepository.findOne({ where: { Email: email } });
    user.userPassword = await bcrypt.hash(newPassword, 10);
    await this.userRepository.save(user);
  }
}
