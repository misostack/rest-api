import {
  UserMember,
  UserAdmin,
  UserEntity,
  UserTypes,
} from 'src/domain/entities';
import { UserRepository } from 'src/persistence/repositories/UserRepository';
import { getManager } from 'typeorm';

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

  public static getUserRepository(): UserRepository {
    const entityManager = getManager();
    return entityManager.getCustomRepository(UserRepository);
  }
}
