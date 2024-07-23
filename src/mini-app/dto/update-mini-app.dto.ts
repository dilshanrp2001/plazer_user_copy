import { PartialType } from '@nestjs/mapped-types';
import { CreateMiniAppDto } from './create-mini-app.dto';

export class UpdateMiniAppDto extends PartialType(CreateMiniAppDto) {}
