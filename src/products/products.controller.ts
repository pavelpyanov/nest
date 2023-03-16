import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  @ApiOkResponse({ status: 200, type: Product, isArray: true })
  getAllProducts() {
    return this.productService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: Product })
  getProduct(@Param('id') id: string) {
    const product = this.productService.getProduct(id);
    return product;
  }

  @Post()
  @ApiOkResponse({ status: 200, type: String })
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Delete(':id')
  @ApiOkResponse({ status: 200, type: Boolean })
  removeProduct(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Put(':id')
  @ApiOkResponse({ status: 200, type: Product })
  updateProduct(
    @Body() updateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ) {
    return this.productService.update(updateProductDto, id);
  }
}
