import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export enum Gender {
  Male = 'male',
  Female = 'female',
  Unspecified = 'unspecified',
}

export enum Role {
  Member = 'Member',
  OrganizationAdmin = 'Organization Admin',
  PlazerAdmin = 'Plazer Admin',
  Developer = 'Developer',
}

export class CreatePlazerUserDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  userPassword: string;

  @IsNotEmpty()
  @IsString()
  userFName: string;

  @IsNotEmpty()
  @IsString()
  userLName: string;

  @IsNotEmpty()
  @IsString()
  AddressL1: string;

  @IsNotEmpty()
  @IsString()
  AddressL2: string;

  @IsOptional()
  @IsString()
  AddressL3?: string;

  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsOptional()
  @IsEnum(Gender)
  gender: Gender;

  @IsOptional()
  @IsString()
  skills?: string;

  @IsOptional()
  @IsDateString()
  DoB?: Date;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  gitlink?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class UpdatePlazerUserDto {
  @IsOptional()
  @IsString()
  userName?: string;

  @IsOptional()
  @IsString()
  userPassword?: string;

  @IsOptional()
  @IsString()
  userFName?: string;

  @IsOptional()
  @IsString()
  userLName?: string;

  @IsOptional()
  @IsString()
  AddressL1?: string;

  @IsOptional()
  @IsString()
  AddressL2?: string;

  @IsOptional()
  @IsString()
  AddressL3?: string;

  @IsOptional()
  @IsEmail()
  Email?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsString()
  skills?: string;

  @IsOptional()
  @IsDateString()
  DoB?: Date;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  gitlink?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
