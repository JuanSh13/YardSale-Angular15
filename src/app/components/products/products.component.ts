import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  // Importación del servicio ProductsApiService
  constructor(
    private productApiService: ProductsApiService
  ) {}

  //////////////////////////////////////////////////////////
  ngOnInit(): void {
    // Obtiene los productos con un observable (Subscribe) y los almacena en la variable (data)
    this.productApiService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  ////////////////////////////////////////////////////////
  myShoppingCart: Product[] = []; // Array de productos seleccionados
  totalPrice = 0; // Precio de los productos seleccionados

  // Agrega productos seleccionados a una array
  onAddToShoppingCart(product: Product) {
    this.myShoppingCart.push(product);
    console.log(this.myShoppingCart);
    this.totalPrice = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

  /////////////////////////////////////////////////////
  viewProductDetail: any = [];
  showProductDetail = false;

  ////////////////////////////////////////////////////////
  products: Product[] = [];
  productChosen: any;



  onShowDetail(id: string) {
    // console.log(id);
    this.productApiService.getProduct(id).subscribe(data => {
      console.log(data);
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
}
