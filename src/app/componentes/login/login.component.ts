import { Component } from '@angular/core';
// Fazer as importações necessárias
import { FormsModule } from '@angular/forms'; // este recurso é necessário para a operação com formulários do angular
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { User } from '../../models/user'; // Este é o model que "trata" todos os dados referentes a usuários
import { HeaderHomeComponent } from '../header-home/header-home.component';
import { RecuperarSenhaComponent } from '../recuperar-senha/recuperar-senha.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,HeaderHomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

// Passo 0: definir o título do componente

tituloComp: string = 'Login de Usuário'

// 1º passo: definir uma prop/objeto literal para receber como valor credenciais de acesso para o login do usuário

credentials: any = {
  email: '',
  password: ''
  }

  constructor (private authService: AuthService, private router: Router) {}
  goToRecuperar(): void {
    this.router.navigate(['/recuperar-senha']);
  }
  // 3º passo: define 
  onSubmit(): void {
    // fazer o acesso à DI do service

    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login bem sucedido!', response.message)
        this.router.navigate(['/conta-inicial']) // se tudo ocorrer bem, seremos, depois da autenticação redirecionados para a tela de anotações

      },

      error: (error) => {
        console.error('Erro ao fazer o login', error.error.error)
      }
    });
  }
}
