import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Get()
    getAllProducts() {
        return this.productsService.findAll();
    }
    @Get(':id')
    getOneProduct(@Param('id') id: string) {
        const product = this.productsService.findOne(Number(id));
        if (!product) {
            throw new NotFoundException(`No record found with ID ${id}`);
        }
        return product;
    }
}
