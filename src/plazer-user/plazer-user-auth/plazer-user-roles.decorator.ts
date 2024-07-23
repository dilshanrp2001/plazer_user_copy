import { SetMetadata } from '@nestjs/common';
import { PlazerUserRole } from './plazer-user-role.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: PlazerUserRole[]) =>
  SetMetadata(ROLES_KEY, roles);
