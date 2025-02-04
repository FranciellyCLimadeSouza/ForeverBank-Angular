import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-conta-inicial',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './conta-inicial.component.html',
  styleUrl: './conta-inicial.component.css'
})
export class ContaInicialComponent {
  tituloComp: string = 'conta'
  constructor(private router: Router) {}
  saldo: number = 1000.00;
  
  goToExtrato(): void {
    this.router.navigate(['/extrato']);
  }
}
