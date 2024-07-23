import { Test, TestingModule } from '@nestjs/testing';
import { MiniAppService } from './mini-app.service';

describe('MiniAppService', () => {
  let service: MiniAppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiniAppService],
    }).compile();

    service = module.get<MiniAppService>(MiniAppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
