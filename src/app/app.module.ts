import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './cart/order/order.component';
import { DefaultComponent } from './home/default/default.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import {SuiModule} from 'ng2-semantic-ui';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { PopupDirective } from './price-display/popup.directive';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    OrderComponent,
    DefaultComponent,
    ProductListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent,
    PriceDisplayComponent,
    ProductDetailComponent,
    PopupDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    SuiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AmplifyService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
