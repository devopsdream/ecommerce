import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import {GreetingComponentCore} from 'aws-amplify-angular/dist/src/components/authenticator/greeting-component/greeting.component.core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends GreetingComponentCore {
  signedIn: boolean;
  user: any;

  constructor(protected amplifyService: AmplifyService) {
    super(amplifyService);
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
        }
      });
  }


}

