import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin
  

  constructor(
    private authService:  AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
   
      this.authService.logar(this.userLogin).subscribe((resp: UserLogin) =>{
        this.userLogin = resp
        localStorage.setItem('token', this.userLogin.token)
        if(this.userLogin.usuario === 'adm01' && this.userLogin.senha === 'adm123'){
          localStorage.setItem('usuario','adm01')
          window.location.href = "/cadastroAdm"
          alert('Seja bem-vindo(a) Adm')
       }
       else{
        localStorage.setItem('usuario',this.userLogin.usuario)
       
        this.router.navigate(['/produtos'])
        alert('Seja bem-vindo(a)')
       }
      })
      
  }
}
