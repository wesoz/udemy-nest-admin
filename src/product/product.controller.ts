import {
  Controller,
  Get,
  Query,
  UseGuards,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductCreateDto } from './models/product-create.dto';
import { ProductUpdateDto } from './models/product-update.dto';
import { ProductService } from './product.service';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all(@Query('page') page = 1) {
    return this.productService.paginate(page);
  }

  @Post()
  async create(@Body() body: ProductCreateDto) {
    return this.productService.create(body);
  }

  @Get()
  async get(@Param('id') id: number) {
    return this.productService.findOne({ id });
  }

  @Put()
  async update(@Param('id') id: number, @Body() body: ProductUpdateDto) {
    await this.productService.update(id, body);
    return this.productService.findOne({ id });
  }

  @Delete()
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
