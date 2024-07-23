// import { Controller, Post, Body } from '@nestjs/common';
// import { PasswordResetService } from './password-reset.service';
// import { CreatePasswordResetDto } from '../plazer-user/dto/create-password-reset.dto';
// import { VerifyOtpDto } from '../plazer-user/dto/verify-otp.dto';
// import { UpdatePasswordDto } from '../plazer-user/dto/update-password.dto';

// @Controller('password-reset')
// export class PasswordResetController {
//   constructor(private readonly passwordResetService: PasswordResetService) {}

//   @Post('request-otp')
//   async requestOtp(
//     @Body() createPasswordResetDto: CreatePasswordResetDto,
//   ): Promise<void> {
//     console.log('end point working');
//     await this.passwordResetService.requestOtp(createPasswordResetDto);
//   }

//   @Post('verify-otp')
//   async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto): Promise<void> {
//     await this.passwordResetService.verifyOtp(verifyOtpDto);
//   }

//   @Post('update-password')
//   async updatePassword(
//     @Body() updatePasswordDto: UpdatePasswordDto,
//   ): Promise<void> {
//     await this.passwordResetService.updatePassword(updatePasswordDto);
//   }
// }
import { Controller, Post, Body } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';
import { CreatePasswordResetDto } from '../plazer-user/dto/create-password-reset.dto';
import { VerifyOtpDto } from '../plazer-user/dto/verify-otp.dto';
import { UpdatePasswordDto } from '../plazer-user/dto/update-password.dto';

@Controller('password-reset')
export class PasswordResetController {
  constructor(private readonly passwordResetService: PasswordResetService) {}

  @Post('request-otp')
  async requestOtp(
    @Body() createPasswordResetDto: CreatePasswordResetDto,
  ): Promise<void> {
    console.log('Endpoint working');
    await this.passwordResetService.requestOtp(createPasswordResetDto);
  }

  @Post('verify-otp')
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto): Promise<void> {
    console.log('Endpoint working');
    await this.passwordResetService.verifyOtp(verifyOtpDto);
  }

  @Post('update-password')
  async updatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
  ): Promise<void> {
    await this.passwordResetService.updatePassword(updatePasswordDto);
  }
}
