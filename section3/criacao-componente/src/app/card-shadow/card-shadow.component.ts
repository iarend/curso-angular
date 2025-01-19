import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-shadow',
  standalone: false,
  
  templateUrl: './card-shadow.component.html',
  styleUrl: './card-shadow.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardShadowComponent {

}
