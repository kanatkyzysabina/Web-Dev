import { Component } from '@angular/core';
import { Product } from '../../product.model';
import { PRODUCTS } from '../../product.data';
import { ProductCard } from '../product-card/product-card';
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = PRODUCTS;

}
