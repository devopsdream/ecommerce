import { Directive } from '@angular/core';

@Directive({
  selector: '[appPopup]'
})
export class PopupDirective {

  constructor() {
    console.log('You clicked the popup');
  }

}
