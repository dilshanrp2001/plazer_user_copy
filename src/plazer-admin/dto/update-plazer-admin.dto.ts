import { PartialType } from '@nestjs/mapped-types';
import { CreatePlazerAdminDto } from './create-plazer-admin.dto';

export class UpdatePlazerAdminDto extends PartialType(CreatePlazerAdminDto) {}
