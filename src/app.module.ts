import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlazerUserModule } from './plazer-user/plazer-user.module';
import { PlazerUserAuthModule } from './plazer-user/plazer-user-auth/plazer-user-auth.module';
import { AuthGuard } from './plazer-user/plazer-user-auth/plazer-user-auth.guard';
import { PasswordResetModule } from './plazer-user/password-reset.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-billowing-unit-a5ekxxtp.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'plazerdb_owner',
      password: 'yuRPD2zjht7o',
      database: 'plazerdb',
      ssl: true,
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //entities: [User],
    }),
    PlazerUserModule,
    PlazerUserAuthModule,
    PasswordResetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
