import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MiniAppService } from './mini-app.service';
import { CreateMiniAppDto } from './dto/create-mini-app.dto';
import { UpdateMiniAppDto } from './dto/update-mini-app.dto';

@Controller('mini-app')
export class MiniAppController {
  constructor(private readonly miniAppService: MiniAppService) {}

  @Post()
  create(@Body() createMiniAppDto: CreateMiniAppDto) {
    return this.miniAppService.create(createMiniAppDto);
  }

  @Get()
  findAll() {
    return this.miniAppService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.miniAppService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMiniAppDto: UpdateMiniAppDto) {
    return this.miniAppService.update(+id, updateMiniAppDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.miniAppService.remove(+id);
  }
}
