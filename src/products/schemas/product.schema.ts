import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { IProduct } from 'src/products/interfaces/product.interface';

export type ProductDocument = HydratedDocument<IProduct>;

@Schema()
export class Product implements IProduct {
  @ApiProperty({ example: 'Banana', description: 'Title of product' })
  @Prop()
  title: string;

  @ApiProperty({ example: '100', description: 'Price in USD' })
  @Prop()
  price: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
