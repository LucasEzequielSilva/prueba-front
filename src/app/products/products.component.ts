import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Products{
  id:number;
  name:string;
  stock:boolean;
  visible:boolean;
  price:number;
  image:string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    isSuccess: Boolean = false;
    loading:Boolean = true;
    cards:Array<Products> = []
    constructor(private http: HttpClient) {}
    toggleState() {
      this.isSuccess = !this.isSuccess;
    }
    ngOnInit(): void {
      this.http.get('./assets/products.json').subscribe((response: any) => {
        setTimeout(()=>{
          this.cards = response
          console.log(this.cards)
          this.loading = false
          console.log(this.loading)
        }, 2000)
      });
    }
}
