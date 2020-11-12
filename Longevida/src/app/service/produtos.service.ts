import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdutos(){
    return this.http.get('http://localhost:8080/produtos', this.token)
  }

  getByIdProduto(id: number){
    return this.http.get(`http://localhost:8080/produtos/${id}`, this.token)
  }

  postProdutos(produtos: Produtos){
    return this.http.post('http://localhost:8080/produtos',produtos, this.token)
  }
  putProdutos(produtos: Produtos){
    return this.http.put(`http://localhost:8080/produtos/${produtos.id}`, produtos, this.token)
  }

  deleteProdutos(id: number){
    return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token)
  }
}
