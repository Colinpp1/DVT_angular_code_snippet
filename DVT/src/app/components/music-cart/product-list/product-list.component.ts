import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList = [];
  searchedKeyword: string;

  constructor(
    private productService: ProductService
    //private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.loadProducts();
   // this.loadWishlist();
  }

  loadProducts() {
     this.productService.getProducts().subscribe((products) => {
      this.productList = products.data;
      console.log("PRODUCTS are ");
      console.log(products);
     })
  }

}
