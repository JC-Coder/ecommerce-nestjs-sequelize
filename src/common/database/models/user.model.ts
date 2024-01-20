import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Table,
} from 'sequelize-typescript';
import { Profile } from './profile.model';
import { BaseModel } from './base-model/base.model';
import { Product } from './product.model';
import { UserProducts } from './user-products.model';

@Table
export class User extends BaseModel {
  @Column
  name: string;

  @Column(DataType.STRING)
  email: string;

  @HasOne(() => Profile)
  profile: Profile;

  @HasMany(() => Product)
  products: Product[];

  @BelongsToMany(() => Product, () => UserProducts)
  orders: Product[];
}
