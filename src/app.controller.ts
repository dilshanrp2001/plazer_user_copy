import { Controller, Get, UseGuards, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './plazer-user/plazer-user-auth/plazer-user-roles.decorator';
import { PlazerUserRole } from './plazer-user/plazer-user-auth/plazer-user-role.enum';
import { PlazerUserRolesGuard } from './plazer-user/plazer-user-auth/plazer-user-roles.guard';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles(PlazerUserRole.OrganizationAdmin)
  @UseGuards(PlazerUserRolesGuard)
  getHello(): string {
    this.logger.log('getHello method called');
    const result = this.appService.getHello();
    this.logger.log(`getHello method returned: ${result}`);
    return result;
  }
}
