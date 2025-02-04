import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-conta-inicial',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './conta-inicial.component.html',
  styleUrl: './conta-inicial.component.css'
})
export class ContaInicialComponent {
  saldo: number = 1000.00;

  verExtrato() {
    // Lógica para ver o extrato
    console.log('Ver extrato');
  }
}
