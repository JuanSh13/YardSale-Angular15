import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: "",
    title: "",
    image: "",
    price: 0,
  }

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>()

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
