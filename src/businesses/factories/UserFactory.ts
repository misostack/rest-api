import { UserTypes } from 'src/domain/user';
import { UserMember, UserAdmin, UserEntity } from 'src/domain/user/user';

export abstract class UserFactory {
  public static createUser(model: Partial<UserAdmin | UserMember>): UserEntity {
    if (model.type === UserTypes.ADMIN) {
      return new UserAdmin(model);
    }
    if (model.type == UserTypes.MEMBER) {
      return new UserMember(model);
    }
    return null;
  }
}
