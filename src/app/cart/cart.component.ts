import {Component, OnInit, ɵcontainerRefreshStart} from '@angular/core';
import { APIService} from '../API.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total = 0;

  cart: any = [];

  constructor(private api: APIService, private router: Router) { }

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
  }
}

