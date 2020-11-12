import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CrudProdutoComponent } from './crud-produto/crud-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    HomeComponent,
    ContatoComponent,
    NavbarComponent,
    FooterComponent,
    CategoriasComponent,
    LoginComponent,
    CadastroComponent,
    EmpresaComponent,
    CadastroProdutoComponent,
    CrudProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
