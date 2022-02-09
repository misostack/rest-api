import { UserTypes } from 'src/domain/entity';
import { UserMember, UserAdmin, UserEntity } from 'src/domain/entity/user';

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
