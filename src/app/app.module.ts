import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component'; // Importa HttpClientModule
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    DetailsComponent,
    ProductsComponent,
    CardComponent
  ],
  imports: [
    NgxSkeletonLoaderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
