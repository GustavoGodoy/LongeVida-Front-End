import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
