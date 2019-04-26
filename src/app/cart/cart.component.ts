import {Component, OnInit, ɵcontainerRefreshStart} from '@angular/core';
import { APIService} from '../API.service';
import { Router } from '@angular/router';
import {AmplifyService} from 'aws-amplify-angular';
import {Auth} from 'aws-amplify';
import {getToken} from 'codelyzer/angular/styles/cssLexer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private userName: string;

  total = 0;

  cart: any = [];

  constructor(private api: APIService,
              private router: Router,
              private amplifyService: AmplifyService) {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(user => {
      this.userName = user.username;
      // console.log(this.userName);
    })
      .catch(err => console.log(err));
  }

  ngOnInit() {
    this.api.ListCarts().then(data => {
      this.cart = data.items;
      console.log(this.cart);
    } )
      .catch(err => console.log(err));
  }
  onDelete(item) {
    /*const payload = {id: item.id, owner: item.owner,
    price: item.price, sku: item.sku, product: item.product, __typename: item.__typename}*/
    const payload = {id: item.id};
    this.api.DeleteCart(payload)
      .then(data => {
        console.log(data);
        this.ngOnInit();
      });
    console.log('Delete item from the cart: ' + item.id);

  }

  getTotal(): number {
    return this.cart.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  checkOut(item) {
    this.router.navigateByUrl('/order');
    this.clearCart();
    console.log('checking out ' + item);
    this.amplifyService.analytics().record({
      name: 'checkOut',
      attributes: { owner: this.userName, price: String(this.getTotal()) }
    });
  }
  clearCart() {
    console.log('delete all the items in the cart after checkout');
    for ( const item of this.cart) {
      const payload = {id: item.id};
      // console.log('Purchased: ' + item.product);
      this.amplifyService.analytics().record({
        name: 'productPurchased',
        attributes: { owner: this.userName, product: item.product,
        product_was_purchased: 'true'}
      });
      this.onDelete(payload);
    }
  }
}

