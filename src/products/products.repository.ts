import { Injectable } from '@nestjs/common';
import { products } from 'src/db/productsDb';

@Injectable()
export class ProductsRepository {
  getAllProductsDb() {
    return products;
  }
}
