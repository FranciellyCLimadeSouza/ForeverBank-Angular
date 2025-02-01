import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../header-home/header-home.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-pravc',
  standalone: true,
  imports: [HeaderHomeComponent],
  templateUrl: './pravc.component.html',
  styleUrl: './pravc.component.css'
})
export class PravcComponent {
  constructor(private router: Router) {}
  goToCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
