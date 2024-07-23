import { PartialType } from '@nestjs/mapped-types';
import { CreatePlazerUserDto } from './create-plazer-user.dto';

export class UpdatePlazerUserDto extends PartialType(CreatePlazerUserDto) {}
