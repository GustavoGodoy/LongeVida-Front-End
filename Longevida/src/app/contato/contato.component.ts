import { Component, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  enviar(){
    this.alert.showAlertInfo('Item adicionado ao carrinho')
  }
}
