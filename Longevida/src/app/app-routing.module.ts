import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { CrudProdutoComponent } from './crud-produto/crud-produto.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
{path: '', redirectTo: 'home',pathMatch:'full'}, 
{path:'home', component: HomeComponent},
{path:'produtos', component: ProdutosComponent},
{path:'contato', component: ContatoComponent},
{path:'cadastro', component: CadastroComponent},
{path:'login', component: LoginComponent},
{path: 'empresa',component: EmpresaComponent},
{path: 'c4d4str0-pr0dut0', component: CrudProdutoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
