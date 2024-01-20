import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../common/database/models/user.model';
import { CreateUserDto } from './dto/user.dto';
import { ProductsService } from '../products/products.service';
import { Product } from '../../common/database/models/product.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private productService: ProductsService,
  ) {}

  async create(payload: CreateUserDto): Promise<User> {
    return await this.userModel.create({ ...payload });
  }

  async getById(id: number): Promise<User> {
    return await this.userModel.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Product,
          as: 'orders',
        },
        {
          model: Product,
          as: 'products',
        },
      ],
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async deleteById(id: number): Promise<void> {
    await this.userModel.destroy({
      where: { id },
    });
  }

  async addProductToUserOrder(
    userId: number,
    productId: number,
  ): Promise<void> {
    const [user, product] = await Promise.all([
      this.userModel.findByPk(userId),
      this.productService.findOne(productId),
    ]);

    if (!user || !product) {
      throw new NotFoundException(`${!user ? 'user' : 'product'} not found`);
    }

    await user.$add('orders', product);
  }
}
