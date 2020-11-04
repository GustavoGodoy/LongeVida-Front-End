import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
{path: '', redirectTo: 'home',pathMatch:'full'}, 
{path:'home', component: HomeComponent},
{path:'produtos', component: ProdutosComponent},
{path:'contato', component: ContatoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }