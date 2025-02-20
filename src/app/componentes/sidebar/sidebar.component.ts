import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  tituloComp: string = 'Sidebar'
constructor(private router: Router) {}
goToContaHome(): void {
  this.router.navigate(['/conta']);
}
goToTransferencias(): void {
  this.router.navigate(['/transferencias']);
}
goToInvestimentos(): void {
  this.router.navigate(['/investimentos']);
}
goToCartoes(): void {
  this.router.navigate(['/cartoes']);
}
goToPagamentos(): void {
  this.router.navigate(['/pagamentos']);
}
}
