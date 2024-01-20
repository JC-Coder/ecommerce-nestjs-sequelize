import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '../../common/database/models/product.model';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() payload: CreateProductDto): Promise<Product> {
    return this.productsService.create(payload);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    return this.productsService.update(Number(id), payload);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.productsService.remove(Number(id));
  }
}
