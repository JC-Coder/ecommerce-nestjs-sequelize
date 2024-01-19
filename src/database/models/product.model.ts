import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { BaseModel } from './base-model/base.model';
import { User } from './user.model';
import { UserProducts } from './user-products.model';

@Table
export class Product extends BaseModel {
  @ForeignKey(() => User)
  ownerId: number;

  @Column
  name: string;

  @BelongsTo(() => User)
  owner: User;

  @BelongsToMany(() => User, () => UserProducts)
  buyers: User[];
}
