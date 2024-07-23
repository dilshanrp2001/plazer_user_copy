import { HttpStatus } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

export class MailService {
  private mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'plazer456@gmail.com',
      pass: 'rqam nixs vfcm qaso',
    },
  });

  private mailDetails = {
    from: 'plazer456@gmail.com',
    to: '',
    subject: '',
    html: '',
  };

  constructor(to: string, subject: string, html: string) {
    this.mailDetails.to = to;
    this.mailDetails.subject = subject;
    this.mailDetails.html = html;
  }

  async sendMail(): Promise<number> {
    try {
      await this.mailTransporter.verify();
      const result = await this.mailTransporter.sendMail(this.mailDetails);
      return result.accepted ? HttpStatus.ACCEPTED : HttpStatus.NOT_ACCEPTABLE;
    } catch (error) {
      console.error(error);
      return HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }

  async sendOtp(to: string, otp: string): Promise<number> {
    const subject = 'Your OTP Code';
    const html = `<p>Your OTP code is <strong>${otp}</strong></p>`;
    this.mailDetails.to = to;
    this.mailDetails.subject = subject;
    this.mailDetails.html = html;
    return this.sendMail();
  }
}
