import { Test, TestingModule } from '@nestjs/testing';
import { PlazerAdminController } from './plazer-admin.controller';
import { PlazerAdminService } from './plazer-admin.service';

describe('PlazerAdminController', () => {
  let controller: PlazerAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlazerAdminController],
      providers: [PlazerAdminService],
    }).compile();

    controller = module.get<PlazerAdminController>(PlazerAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
