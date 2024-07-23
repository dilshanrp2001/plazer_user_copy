import { Module } from '@nestjs/common';
import { MiniAppService } from './mini-app.service';
import { MiniAppController } from './mini-app.controller';

@Module({
  controllers: [MiniAppController],
  providers: [MiniAppService],
})
export class MiniAppModule {}
