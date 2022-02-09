import { AbstractBaseEntity } from './base-entity';

export enum UserTypes {
  ADMIN = 'admin',
  MEMBER = 'member',
}

export abstract class UserEntity extends AbstractBaseEntity {
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  type: UserTypes;
}

export class UserMember extends UserEntity {
  constructor(payload: Partial<UserMember>) {
    super(payload);
    this.type = UserTypes.MEMBER;
  }
}

export class UserAdmin extends UserEntity {
  constructor(payload: Partial<UserAdmin>) {
    super(payload);
    this.type = UserTypes.ADMIN;
  }
}
