import { Column, DataType, Default, Model } from 'sequelize-typescript';

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
}
