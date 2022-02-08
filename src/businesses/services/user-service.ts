import { UserTypes } from 'src/domain/user';
import { User } from 'src/domain/user/user';
import {
  CreateUserModel,
  ViewUserModel,
} from 'src/businesses/contracts/user-models';
import { instanceToPlain, plainToInstance } from 'class-transformer';

export class UserService {
  public create(payload: CreateUserModel): ViewUserModel {
    const createdUser = new User({
      id: 1,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      login: payload.login,
      type: payload.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return plainToInstance(ViewUserModel, instanceToPlain(createdUser));
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
    return [
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
    ];
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