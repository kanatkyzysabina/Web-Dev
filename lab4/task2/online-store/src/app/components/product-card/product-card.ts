import { Component, Input } from '@angular/core';
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
  activeImgIndex: number = 0; // which image to show

  setActiveImg(index: number) {
    this.activeImgIndex = index;
  }

  prevImage() {
    if(this.activeImgIndex === 0) {
      this.activeImgIndex = this.product.images.length - 1; //index of last image
    }
    else{
      this.activeImgIndex = this.activeImgIndex - 1;
    }
  }

  nextImage() {
    if(this.activeImgIndex === this.product.images.length - 1) {
      this.activeImgIndex = 0;
    }
    else{
      this.activeImgIndex = this.activeImgIndex + 1;
    }
  }

  // starts function
  getStars(): number[] {
    return [1, 2, 3, 4, 5].map(star => {
      if(star <= Math.round(this.product.rating)){
        return 1;
      } else return 0;
    });
  }


  // share button
  shareOnWhatsApp(): void {
    const msg = encodeURIComponent('Check out this product!!! -> ' + this.product.link);
    window.open('https://wa.me/?text=' + msg, '_blank');
  }


}
