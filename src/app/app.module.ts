import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/main-layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component'; // Importa HttpClientModule
import { ProductsComponent } from './products/products.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule
import { DialogAnimationsExample } from './stock-rehabilitation-dialog/dialog-animations-example.component';
import { DialogAnimationsConfirmation } from './stock-rehabilitation-dialog/confirmation.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    DetailsComponent,
    ProductsComponent,
    CardComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    MatDialogModule,
    NgxSkeletonLoaderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogAnimationsExample,
    DialogAnimationsConfirmation
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
