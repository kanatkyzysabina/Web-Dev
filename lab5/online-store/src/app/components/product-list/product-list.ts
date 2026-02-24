import { Component, Input } from '@angular/core';
import { Product } from '../../product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products: Product[] = [];

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}
