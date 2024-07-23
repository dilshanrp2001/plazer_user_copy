import { Injectable } from '@nestjs/common';
import { CreatePlazerAdminDto } from './dto/create-plazer-admin.dto';
import { UpdatePlazerAdminDto } from './dto/update-plazer-admin.dto';

@Injectable()
export class PlazerAdminService {
  create(createPlazerAdminDto: CreatePlazerAdminDto) {
    return 'This action adds a new plazerAdmin';
  }

  findAll() {
    return `This action returns all plazerAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plazerAdmin`;
  }

  update(id: number, updatePlazerAdminDto: UpdatePlazerAdminDto) {
    return `This action updates a #${id} plazerAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} plazerAdmin`;
  }
}
