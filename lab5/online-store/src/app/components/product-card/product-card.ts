import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  activeImgIndex: number = 0;

  setActiveImg(index: number) {
    this.activeImgIndex = index;
  }

  prevImage() {
    if (this.activeImgIndex === 0) {
      this.activeImgIndex = this.product.images.length - 1;
    } else {
      this.activeImgIndex--;
    }
  }

  nextImage() {
    if (this.activeImgIndex === this.product.images.length - 1) {
      this.activeImgIndex = 0;
    } else {
      this.activeImgIndex++;
    }
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5].map(star =>
      star <= Math.round(this.product.rating) ? 1 : 0
    );
  }

  likeProduct() {
    this.product.likes++;
  }

  onDelete() {
    this.deleteProduct.emit(this.product.id);
  }

  shareOnWhatsApp(): void {
    const msg = encodeURIComponent('Check out this product!!! -> ' + this.product.link);
    window.open('https://wa.me/?text=' + msg, '_blank');
  }
}