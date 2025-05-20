import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        {
            id: 1,
            name: 'Mobile',
            description: 'Mobile description',
            price: 100,
        },
        {
            id: 2,
            name: 'Tablet',
            description: 'Tablet description',
            price: 200,
        },
        {
            id: 3,
            name: 'PC',
            description: 'Pc description',
            price: 300,
        },
    ];

    findAll() {
        return this.products;
    }
    findOne(id: number) {
        return this.products.find((product) => product.id === id);
    }
    deleteOne(id: number) {
        this.products = this.products.filter((product) => product.id !== id);
    }
    updateOne(id: number, product: any) {
        const index = this.products.findIndex((product) => product.id === id);
        this.products[index] = product;
    }
}
