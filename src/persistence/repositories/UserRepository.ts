import { AbstractRepository, EntityRepository } from 'typeorm';
import { instanceToPlain } from 'class-transformer';
import { User } from '../entity';
import { UserEntity } from 'src/domain/entities';
import { UserFactory } from 'src/domain/factories';
import { IUserRepository } from 'src/domain/repositories';

@EntityRepository(User)
export class UserRepository
  extends AbstractRepository<User>
  implements IUserRepository
{
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
