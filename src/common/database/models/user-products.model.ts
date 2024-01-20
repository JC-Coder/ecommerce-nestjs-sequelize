import { Column, ForeignKey, Table } from 'sequelize-typescript';
import { BaseModel } from './base-model/base.model';
import { User } from './user.model';
import { Product } from './product.model';

@Table
export class UserProducts extends BaseModel {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;
}
