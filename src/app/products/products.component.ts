import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
/** 
*@title Productos
*/
export class ProductsComponent implements OnInit {
    loading:boolean = true;
    cards:Product[] = []
    searchTerm: string = '';
    filteredCards: Array<Product> = [];
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
      this.http.get<Product[]>('./assets/products.json').subscribe((response: Product[]) => {
        setTimeout(() => {
          this.cards = response;
          this.filteredCards = response; // Initialize filteredCards
          this.loading = false;
        }, 2000);
      });
    }    // filtro
    filterCards() {
      if (this.searchTerm) {
        this.filteredCards = this.cards.filter(card => 
          card.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else {
        this.filteredCards = this.cards;
      }
    }
        
    
}
