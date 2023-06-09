import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from'./views/home/home.component'
import {ProductCrudComponent} from './views/product-crud/product-crud.component'
import { JogadoresSportComponent } from './components/jogadores-sport/jogadores-sport.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

const routes: Routes = [{
  path:"",
  component : HomeComponent

},
{
  path:"products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
{
  path:"jogadores-sport",
  component: JogadoresSportComponent
 },
 {
  path: "noticias",
  component: NoticiasComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
