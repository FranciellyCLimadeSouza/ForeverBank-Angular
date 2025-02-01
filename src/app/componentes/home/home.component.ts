import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // este recurso é necessário para a operação com formulários do angular
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
tituloComp: string = 'Pagina inicial'
cpf: string = '';
constructor(private router: Router) {}
goToLogin(): void {
  this.router.navigate(['/login']);
}
goToPerguntas(): void {
  this.router.navigate(['/perguntas']);
}
goToPraVc(): void {
  this.router.navigate(['/pravc']);
}
goToCadastro(): void {
  // Redirecionar para a página de cadastro com o CPF
  this.router.navigate(['/cadastro'], { queryParams: { cpf: this.cpf } });
}
}

