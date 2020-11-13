import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../model/Produtos';
import { ProdutosService } from '../service/produtos.service';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produtos: Produtos = new Produtos()
  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)


    let id: number = this.route.snapshot.params["id"]
    this.findByIdProdutos(id)
  }

  findByIdProdutos(id: number){
    this.produtosService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produtos = resp
    })
  }
  btnSim(){
    this.produtosService.deleteProdutos(this.produtos.id).subscribe(() => {
      this.router.navigate(['/cadastroAdm'])
      alert('Produto apagada com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/cadastroAdm'])
  }

}
