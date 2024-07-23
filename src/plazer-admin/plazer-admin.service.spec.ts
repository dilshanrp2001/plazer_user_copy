import { Test, TestingModule } from '@nestjs/testing';
import { PlazerAdminService } from './plazer-admin.service';

describe('PlazerAdminService', () => {
  let service: PlazerAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlazerAdminService],
    }).compile();

    service = module.get<PlazerAdminService>(PlazerAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
