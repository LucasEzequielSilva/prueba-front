import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Category {
  name: string;
  subcategories?: string[]; // Marcar subcategorías como opcionales
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isDrawerOpen:Boolean = false;
  collapse:Boolean = false;
  data: Category[] = [];

  constructor(private http: HttpClient) {}

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    this.collapse = false

  }
  handleCollapse(){
    this.collapse = !this.collapse 
  }
  ngOnInit() {
    this.http.get('./assets/categories.json') 
      .subscribe((response: any) => {
          this.data = response;
      });
  }

}

