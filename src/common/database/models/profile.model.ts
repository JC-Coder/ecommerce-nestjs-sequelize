import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { BaseModel } from './base-model/base.model';

@Table
export class Profile extends BaseModel {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @Column
  bio: string;

  @BelongsTo(() => User)
  user: User;
}
