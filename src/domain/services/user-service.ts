import { UserTypes } from 'src/domain/entities';
import { CreateUserModel, ViewUserModel } from '../contracts/user-models';
import { BaseService } from './base-service';
import { Injectable } from '@nestjs/common';

import { UserFactory } from '../factories';

@Injectable()
export class UserService extends BaseService {
  constructor() {
    super();
  }
  public async create(model: CreateUserModel): Promise<ViewUserModel> {
    const userEntity = UserFactory.createUser(model);
    const createdUser = await UserFactory.getUserRepository().save(userEntity);
    return this.entityToModel(createdUser, ViewUserModel);
  }

  public async findById(id: string): Promise<ViewUserModel> {
    const user = await UserFactory.getUserRepository().findById(id);
    return this.entityToModel(user, ViewUserModel);
  }
  public findAll() {
    return {
      pager: {
        pageNumber: 1,
        itemsPerPage: 10,
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
