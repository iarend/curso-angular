import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface IPlan{
  infos: IInfos;
}

interface IInfos{
  type: string;
  price: number;
}

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  //@ts-ignore
  plan: IPlan = {
    infos: {
      type: 'Carregando...',
      price: 0
    }
  };

  ngOnInit(): void {
    console.log('ngOnInit');

    setTimeout(() => {
      console.log('Set timeout Start');
      this.plan.infos.type = 'Simples';
      this.plan.infos.price = 1000;
    }, 4000);
    console.log('Set timeout End');
  }

  getFullPrice(){
    console.log('getFullPrice');
    return `R$ ${this.plan.infos.price},00/Mês`;
  }
}
