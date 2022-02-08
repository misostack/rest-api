import { UserTypes } from '.';
import { AbstractBaseEntity } from '../base-entity';

export class User extends AbstractBaseEntity {
  public login: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public type: UserTypes;
  constructor(payload: User) {
    super(payload);
  }
}
