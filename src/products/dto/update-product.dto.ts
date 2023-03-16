import { ApiProperty } from '@nestjs/swagger';
import { IProduct } from '../interfaces/product.interface';

export class UpdateProductDto implements IProduct {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly price: number;
}
