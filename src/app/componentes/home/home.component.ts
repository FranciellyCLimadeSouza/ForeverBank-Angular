import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // este recurso é necessário para a operação com formulários do angular
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from '../header-home/header-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule,HeaderHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
tituloComp: string = 'Pagina inicial'
email: string = '';
constructor(private router: Router) {}


goToCadastro(): void {
  // Redirecionar para a página de cadastro com o email
  this.router.navigate(['/cadastro'], { queryParams: { email: this.email } });
}
}

