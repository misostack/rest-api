import { Column, Entity, Index } from 'typeorm';
import { BaseEntity } from './BaseEntity';

import { UserTypes } from '../../domain/entities';

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
  @Index('uq_users_email', {
    unique: true,
  })
  @Column({
    length: 80,
    type: 'varchar',
    nullable: false,
  })
  email: string;
  @Index('uq_users_login', {
    unique: true,
  })
  @Column({
    length: 60,
    type: 'varchar',
    nullable: false,
  })
  login: string;
  @Column({
    length: 60,
    type: 'varchar',
    nullable: false,
  })
  password: string;
  @Column({
    length: 60,
    type: 'varchar',
    nullable: false,
  })
  firstName: string;
  @Column({
    length: 60,
    type: 'varchar',
    nullable: false,
  })
  lastName: string;
  @Column({
    type: 'enum',
    enum: UserTypes,
    nullable: false,
  })
  type: UserTypes;
}
