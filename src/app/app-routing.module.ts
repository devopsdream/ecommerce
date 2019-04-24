import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './cart/order/order.component';
import {SignUpComponent} from 'aws-amplify-angular/dist/src/components/authenticator/sign-up-component/sign-up.factory';
import {AuthenticatorComponent} from 'aws-amplify-angular/dist/src/components/authenticator/authenticator/authenticator.factory';
import {ProductDisplayComponent} from './product-display/product-display.component';
import {ProductDetailComponent} from './product-list/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'signup', component: AuthenticatorComponent},
  {path: 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports:  [
    RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
