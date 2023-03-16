import { ApiProperty } from '@nestjs/swagger';
import { IProduct } from '../interfaces/product.interface';

export class CreateProductDto implements IProduct {
  @ApiProperty({
    description: 'Title of product',
    default: 'Banana',
  })
  readonly title: string;

  @ApiProperty({
    description: 'Price of product in USD',
    default: '100',
  })
  readonly price: number;
}
