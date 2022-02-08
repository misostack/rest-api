import { UserTypes } from 'src/domain/user';
import { User } from 'src/domain/user/user';
import {
  CreateUserModel,
  ViewUserModel,
} from 'src/businesses/contracts/user-models';
import { BaseService } from './base-service';
import { Injectable } from '@nestjs/common';
import { ConfigurationService } from 'src/configuration/configuration.service';
import { UserRepository } from 'src/persistence/repositories/UserRepository';

@Injectable()
export class UserService extends BaseService {
  constructor(
    private configurationService: ConfigurationService,
    private userRepository: UserRepository,
  ) {
    super();
  }
  public async create(payload: CreateUserModel): Promise<ViewUserModel> {
    console.error(this.userRepository.example());
    const createdUser = await this.userRepository.save({
      login: payload.login,
      password: payload.password,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      type: payload.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(createdUser);
    return this.entityToModel(createdUser, ViewUserModel);
  }
  findOne(id: number) {
    return new User({
      id: 1,
      email: 'example@yopmail.com',
      firstName: 'Example',
      lastName: 'User',
      login: 'example.user',
      type: UserTypes.MEMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  public findAll() {
    return {
      pager: {
        max: this.configurationService.getValues().limitRowsPerPage,
      },
      items: [
        new User({
          id: 1,
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
  public update(id: number, payload: any) {
    return new User({
      id: 1,
      email: 'example@yopmail.com',
      firstName: 'Example',
      lastName: 'User',
      login: 'example.user',
      type: UserTypes.MEMBER,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  public remove(id: number) {
    return true;
  }
}
