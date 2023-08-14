import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: '', // Ruta raíz vacía
        pathMatch: 'full', // Coincidencia completa para la ruta raíz
        redirectTo: 'products', // Redirige a la ruta de productos
      },
      {
        path:"products",
        component: ProductsComponent
      }
    ]
  },
  {
    path:"details",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
