import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-card-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  cardId: string | number = '';
  data: Product | undefined;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private router: Router
  ) { }
  
  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cardId = params['id'];
      if (this.cardId !== null) {
        this.http.get<Product[]>('./assets/products.json').subscribe((response: Product[] ) => {
          this.data = response.find((product: Product) => product.id === Number(this.cardId));
        });
      }
    });
  }
  toggleState() {
    if (this.data) {
      this.data.visible = !this.data.visible;
    }
  }
  

}
