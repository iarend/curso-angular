import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {

  plan = {
    type: 'Teste',
    price: 100
  };

  ngOnInit(): void {
    console.log('ngOnInit');

    setTimeout(() => {
      console.log('Set timeout');
      this.plan.type = 'Simples';
      this.plan.price = 1000;
    }, 4000);
  }

  getFullPrice(){
    console.log('getFullPrice');
    return `R$ ${this.plan.price},00/Mês`;
  }
}
