import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {Product} from '../product.model';
import { APIService} from '../API.service';
import {AmplifyService} from 'aws-amplify-angular';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private productList = [];
  private auth;
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct;


  constructor(private api: APIService, private amplifyService: AmplifyService) {
    // this.auth = this.amplifyService.auth().configure({authenticationFlowType: 'CUSTOM_AUTH'});
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {

    this.api.ListProducts().then(
      data => {
        this.productList = data.items;
      }
    );
    // console.log('The products from the API: ', this.productList);
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
    console.log(product.name + ' was clicked ');
  }

  mouseOver(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {

    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

}


