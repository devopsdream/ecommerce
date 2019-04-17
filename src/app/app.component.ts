import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.analytics();
  }
}
