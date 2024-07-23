import { Injectable } from '@nestjs/common';
import { CreateMiniAppDto } from './dto/create-mini-app.dto';
import { UpdateMiniAppDto } from './dto/update-mini-app.dto';
import { Repository } from 'typeorm';
import { MiniApp } from './entities/mini-app.entity';

@Injectable()
export class MiniAppService {
  constructor(private readonly miniAppsRepository:
    Repository<MiniApp>
    ){
    
  }
  create(createMiniAppDto: CreateMiniAppDto) {
    return 'This action adds a new miniApp';
  }

  findAll() {
    return `This action returns all miniApp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} miniApp`;
  }

  update(id: number, updateMiniAppDto: UpdateMiniAppDto) {
    return `This action updates a #${id} miniApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} miniApp`;
  }
}
