import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlazerAdminService } from './plazer-admin.service';
import { CreatePlazerAdminDto } from './dto/create-plazer-admin.dto';
import { UpdatePlazerAdminDto } from './dto/update-plazer-admin.dto';

@Controller('plazer-admin')
export class PlazerAdminController {
  constructor(private readonly plazerAdminService: PlazerAdminService) {}

  @Post()
  create(@Body() createPlazerAdminDto: CreatePlazerAdminDto) {
    return this.plazerAdminService.create(createPlazerAdminDto);
  }

  @Get()
  findAll() {
    return this.plazerAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plazerAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlazerAdminDto: UpdatePlazerAdminDto) {
    return this.plazerAdminService.update(+id, updatePlazerAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plazerAdminService.remove(+id);
  }
}
