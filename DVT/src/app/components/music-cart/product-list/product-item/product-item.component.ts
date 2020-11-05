import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ModalService } from '../../../.././services/modal-service.service';
import { ModalRef } from './../../../../models/modal-ref.model';
import { MyModalComponent } from '../../../../my-modalcomponent';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;

  constructor(private modalService: ModalService, private productService: ProductService) { }

  ngOnInit() {
  }

  onCreateModal(): void {

    this.productService.getTrackList(this.productItem.tracklist).subscribe((products) => {
    
      console.log("PRODUCTS tracks  are ");
      console.log(products);
     })
  
   const modalRef = this.modalService.open(MyModalComponent, { title: this.productItem.title, message: this.productItem.tracklist });
   
   modalRef.onResult().subscribe(
       closed => console.log('closed', closed),
       dismissed => console.log('dismissed', dismissed),
       () => console.log('completed')
     );
  }
}
