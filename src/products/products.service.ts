import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { IProduct } from './interfaces/product.interface';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<IProduct[]> {
    return this.productModel.find();
  }

  async getProduct(id: string): Promise<IProduct> {
    return this.productModel.findById(id);
  }

  async create(product: CreateProductDto): Promise<IProduct> {
    const newProduct = new this.productModel(product);
    const result = await newProduct.save();
    return result.id;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.productModel.deleteOne({ _id: id });
    return result.acknowledged;
  }

  async update(product: CreateProductDto, id: string): Promise<boolean> {
    const result = await this.productModel.updateOne({ _id: id }, product);
    return result.acknowledged;
  }
}
