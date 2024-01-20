import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name: string;
}
