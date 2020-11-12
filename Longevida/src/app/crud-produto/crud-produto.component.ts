import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produtos } from '../model/Produtos';
import { CategoriaService } from '../service/categoria.service';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-crud-produto',
  templateUrl: './crud-produto.component.html',
  styleUrls: ['./crud-produto.component.css']
})
export class CrudProdutoComponent implements OnInit {

  produtos: Produtos = new Produtos()
  listaProdutos: Produtos[]
  idProduto: number

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor(
    private produtosService: ProdutosService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(){

  }
  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }

  findByIdProduto(){
    this.produtosService.getByIdProduto(this.idProduto).subscribe((resp: Produtos) =>{
      this.produtos = resp
    })
  }
  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }
  cadastrar(){
    this.categoria.id = this.idCategoria
    this.produtos.categoria = this.categoria

    this.produtosService.postProdutos(this.produtos).subscribe((resp: Produtos) =>{
      this.produtos = resp
      this.produtos = new Produtos()
      alert('Produtos cadastrado com sucesso!')
      this.findAllProdutos()
    })
  }
}
