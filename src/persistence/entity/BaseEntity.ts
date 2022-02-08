import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;
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
  @BeforeInsert()
  beforeInsert() {
    this.setCreateAndUpdateTime();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.setCreateAndUpdateTime();
  }

  setCreateAndUpdateTime() {
    const now = new Date();
    if (!this.id) {
      this.createdAt = now;
    }
    this.updatedAt = now;
  }
}
