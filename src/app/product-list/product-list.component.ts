import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {Product} from '../product.model';
import { APIService} from '../API.service';
import {AmplifyService} from 'aws-amplify-angular';
import {Auth} from 'aws-amplify';
import { Router} from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private userName: string;
  private productList = [];
  private auth;
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct;


  constructor(private api: APIService,
              private amplifyService: AmplifyService,
              private route: Router) {
    // this.auth = this.amplifyService.auth().configure({authenticationFlowType: 'CUSTOM_AUTH'});
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(user => {
      this.userName = user.username;
      // console.log(this.userName);
    })
      .catch(err => console.log(err));

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

  isBrowsed(product: Product): void {
    this.currentProduct = product;
    // console.log(product+ 'was selected');
    this.amplifyService.analytics().record({
      name: 'productSelected',
      attributes: { product: product.name , price: String(product.price),
         sku: product.sku, owner: this.userName, product_was_selected: 'true' }
    }).then(data => console.log(data)).catch(data => console.log('Error sending productSelected to Pinpoint'));
  }
}


