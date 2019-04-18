import { Component, OnInit, Input  } from '@angular/core';
import { APIService} from '../API.service';
import { Auth } from 'aws-amplify';
import {AmplifyService} from 'aws-amplify-angular';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

  private userName: string;

  @Input() product: any;

  constructor(private  api: APIService, private amplifyService: AmplifyService) {

  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(user => {
      this.userName = user.username;
      // console.log(this.userName);
    })
      .catch(err => console.log(err));
  }


  addToCart(): void {
    // this.api.CreateCart(this.product);

    this.product = { product: this.product.name, department: this.product.department,
      sku: this.product.sku, price: this.product.price, owner: this.userName};
    this.api.CreateCart(this.product).then(data => {
      console.log('Product was added', data);
    }).
    catch(err => console.log(err));
    // console.log('Product added to the cart: ', this.product);
    // send event to pinpoint
    this.amplifyService.analytics().record({
      name: 'AddToCart',
      attributes: { product: this.product.name , price: String(this.product.price),
      owner: this.userName, sku: this.product.sku}
    });
  }
}

