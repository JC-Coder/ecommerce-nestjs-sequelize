import {
  AllowNull,
  Column,
  DataType,
  Default,
  DeletedAt,
  Model,
} from 'sequelize-typescript';

export class BaseModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: string;

  @Default(new Date().getTime().toString())
  @Column({
    type: DataType.BIGINT,
  })
  createdAt?: string;

  @Default(new Date().getTime().toString())
  @AllowNull(true)
  @Column({
    type: DataType.BIGINT,
  })
  updatedAt?: string;

  @AllowNull(true)
  @DeletedAt
  @Column
  deletedAt?: Date;
}
