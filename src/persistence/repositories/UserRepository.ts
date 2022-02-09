import { AbstractRepository, EntityRepository } from 'typeorm';
import { User } from '../entity';
import { UserEntity } from 'src/domain/user/user';
import { instanceToPlain } from 'class-transformer';
import { UserFactory } from 'src/businesses/factories';

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
  public async save(userEntity: UserEntity): Promise<UserEntity> {
    const user = await this.repository.save(
      new User(instanceToPlain(userEntity)),
    );
    return UserFactory.createUser(instanceToPlain(user));
  }

  public async findById(id: string): Promise<UserEntity> {
    const user = await this.repository.findOne(id);
    return UserFactory.createUser(instanceToPlain(user));
  }
}
