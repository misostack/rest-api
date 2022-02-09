import { UserEntity } from '../entities';

export interface IUserRepository {
  save(userEntity: UserEntity): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity>;
}
