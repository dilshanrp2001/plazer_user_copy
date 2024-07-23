import { Module } from '@nestjs/common';
import { PlazerAdminService } from './plazer-admin.service';
import { PlazerAdminController } from './plazer-admin.controller';

@Module({
  controllers: [PlazerAdminController],
  providers: [PlazerAdminService],
})
export class PlazerAdminModule {}
