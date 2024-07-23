import { Test, TestingModule } from '@nestjs/testing';
import { MiniAppController } from './mini-app.controller';
import { MiniAppService } from './mini-app.service';

describe('MiniAppController', () => {
  let controller: MiniAppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiniAppController],
      providers: [MiniAppService],
    }).compile();

    controller = module.get<MiniAppController>(MiniAppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
