import { UserTypes } from 'src/domain/user';
import {
  CreateUserModel,
  ViewUserModel,
} from 'src/businesses/contracts/user-models';
import { BaseService } from './base-service';
import { Injectable } from '@nestjs/common';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { UserRepository } from 'src/persistence/repositories/UserRepository';
import { UserFactory } from '../factories';

@Injectable()
export class UserService extends BaseService {
  constructor(
    private configurationService: ConfigurationService,
    private userRepository: UserRepository,
  ) {
    super();
  }
  public async create(model: CreateUserModel): Promise<ViewUserModel> {
    const userEntity = UserFactory.createUser(model);
    const createdUser = await this.userRepository.save(userEntity);
    return this.entityToModel(createdUser, ViewUserModel);
  }

  public async findById(id: string): Promise<ViewUserModel> {
    const user = await this.userRepository.findById(id);
    return this.entityToModel(user, ViewUserModel);
  }
  public findAll() {
    return {
      pager: {
        max: this.configurationService.getValues().limitRowsPerPage,
      },
      items: [
        UserFactory.createUser({
          id: 'uuid_v4',
          email: 'example@yopmail.com',
          firstName: 'Example',
          lastName: 'User',
          login: 'example.user',
          type: UserTypes.MEMBER,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      ],
    };
  }
  public update(id: string, payload: any) {
    return UserFactory.createUser({
      id: 'uuid_v4',
      email: 'example@yopmail.com',
      firstName: 'Example',
      lastName: 'User',
      login: 'example.user',
      type: UserTypes.MEMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  public remove(id: string) {
    return true;
  }
}
