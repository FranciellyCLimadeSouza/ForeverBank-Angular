import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // este recurso é necessário para a operação com formulários do angular
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {
  tituloComp: string = 'Header'
constructor(private router: Router) {}
goToHome(): void {
  this.router.navigate(['/home']);
}
  goToPerguntas(): void {
    this.router.navigate(['/perguntas']);
  }
  goToPraVc(): void {
    this.router.navigate(['/pravc']);
  }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
