import { Component, OnInit } from '@angular/core';
import { AmplifyService} from 'aws-amplify-angular';
import { Router} from '@angular/router';
import {routerNgProbeToken} from '@angular/router/src/router_module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private amplifyservice: AmplifyService, private router: Router) {
    this.amplifyservice.analytics();
  }

  ngOnInit() {
    this.sendEvent();
  }

  sendEvent() {
    console.log('Event will be sent to AWS Pinpoint');
    /*   this.amplifyservice.analytics().record({
         name: 'addCart',
         attributes: { genre: 'random music', artist: 'Tonny Ouma' }
       });*/
  }

  onCart() {
    console.log('Navigating to the shoipping cart');
    this.router.navigateByUrl('/cart');
  }

  toLogin() {
    console.log('Navigating to Login component');
    this.router.navigateByUrl('/login');
  }


}

