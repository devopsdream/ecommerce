import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private date: any;
  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
  }

}
