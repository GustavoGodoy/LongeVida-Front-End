import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  key = 'data'
  reverse = true

  produto: Produtos = new Produtos()
  listaProdutos: Produtos[] 
  idProduto: number

  constructor(
    private produtosService: ProdutosService) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp
    })
  }

  findByIdProduto(){
    this.produtosService.getByIdProduto(this.idProduto).subscribe((resp: Produtos) =>{
      this.produto = resp
    })
  }
  
}
