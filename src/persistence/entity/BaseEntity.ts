import { BeforeInsert, BeforeUpdate, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

// https://github.com/typeorm/typeorm/issues/873
// bigint -> string

export abstract class BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 36,
  })
  id: string;
  @Column({
    name: 'created_at',
    type: 'datetime',
  })
  createdAt: Date;
  @Column({
    name: 'updated_at',
    type: 'datetime',
  })
  updatedAt: Date;

  // https://typeorm.io/#/listeners-and-subscribers
  @BeforeInsert()
  beforeInsert() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    console.error('before Update');
  }
}
