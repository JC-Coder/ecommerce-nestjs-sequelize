import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../../common/database/models/product.model';
import { UserProducts } from '../../common/database/models/user-products.model';

@Module({
  imports: [SequelizeModule.forFeature([Product, UserProducts])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
