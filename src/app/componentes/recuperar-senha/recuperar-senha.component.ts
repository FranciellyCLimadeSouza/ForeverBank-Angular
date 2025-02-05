import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // este recurso é necessário para a operação com formulários do angular
import { AutenticacaoService } from '../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/user'; // Este é o model que "trata" todos os dados referentes a usuários
import { response } from 'express';
import { HeaderHomeComponent } from '../header-home/header-home.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule,HeaderHomeComponent],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent {
 errorMessage: string = ''
 //usuario: Usuario = new Usuario('','', '')
 usuario: any = {
  email: '',
  senha: '',
  nomeCompleto: '',
  nascimento: ''
 }
 
  constructor (private authService: AutenticacaoService, private router: Router) {}

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  onSubmit(): void {
   
  }
}
