import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../../common/database/models/product.model';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';
import { User } from '../../common/database/models/user.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private readonly productModel: typeof Product,
  ) {}

  async create(payload: CreateProductDto): Promise<Product> {
    return await this.productModel.create({ ...payload });
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll({
      include: [
        {
          model: User,
          as: 'owner',
        },
      ],
    });
  }

  async findOne(id: number): Promise<Product> {
    return this.productModel.findOne({
      where: { id },
      include: [{ model: User, as: 'owner' }],
    });
  }

  async update(id: number, payload: UpdateProductDto): Promise<void> {
    await this.productModel.update(payload, {
      where: { id },
      returning: true,
    });
  }

  async remove(id: number): Promise<number> {
    return this.productModel.destroy({ where: { id } });
  }
}
