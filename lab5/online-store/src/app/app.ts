import { Component } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { CATEGORIES, PRODUCTS } from './product.data';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = CATEGORIES;
  allProducts: Product[] = PRODUCTS;
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.filteredProducts = this.allProducts.filter(
      p => p.categoryId === category.id
    );
  }
}
