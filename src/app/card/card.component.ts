import { Component, Input } from '@angular/core';
interface Products{
  id:number;
  name:string;
  stock:boolean;
  visible:boolean;
  price:number;
  image:string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Products;
  toggleState() {
    this.card.visible = !this.card.visible;
  }
}
