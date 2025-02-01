import { Component } from '@angular/core';
// Fazer as importações necessárias
import { FormsModule } from '@angular/forms'; // este recurso é necessário para a operação com formulários do angular
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user'; // Este é o model que "trata" todos os dados referentes a usuários
import { response } from 'express';
import { HeaderHomeComponent } from '../header-home/header-home.component';
@Component({
  selector: 'app-cadastro',
  standalone: true, // Significa que este componente é "autossuficiente": significa que todos os recursos por ele, componente, que serão usados por ele, ficam aqui disponíveis - sem a necessidade de serem registrados com o decorator @NgModule

  imports: [FormsModule, RouterLink, CommonModule,HeaderHomeComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
 
})
export class CadastroComponent {

  // Definir o título do componente
  
  tituloComp: string = 'Cadastro de Usuários'

  // 1º passo: definir uma prop para receber como valor a instância do model User

  user: User = new User('', '', '')

  // 2º passo: inicializar um novo usuário seguindo alguns passos importantes
  selectedRole: string = 'ROLE_USER' // esta será considerada a role padrão do usuário

  errorMessage: string = ''

  // 3º passo: praticar a injeção de dependência - a partir do service
  constructor (private authService: AuthService, private router: Router) {}

  // 4º passo: definir um método onSubmit(): este método será chamado quando o usuário, no final do cadastro, clicar no botão para enviar os dados para o service que, por sua vez, vai enviar os dados para o endpoint no backend para que, assim, os dados possam ser armazenados no DB.

  onSubmit(): void {
    // definir uma constante para receber como valor a role referente a este usuário.

    const roleName = this.selectedRole

    // vamos usar a role selecionada para compor o restante do conjunto de dados para serem enviados para o service

   // this.authService.register(this.user, roleName)//: até este momento, chamamos o método register, que compõe o service, à sua execução

    // método que "efetivamente" executa o elemento Observable
    this.authService.register(this.user, roleName).subscribe({
      next: (response) => {
        console.log('Usuário cadastrado com sucesso!', response.message)
        this.router.navigate(['/login'])
      },

      // Este bloco de código faz parte do tratamento de erro definido no service. Ele lida com a seguinte chamada: this.authService.register(this.user, roleName)

      // error.error: é o corpo da resposta de erro. Caso ocorra, retornada pelo backend

      // && error.error.length

      // this.errorMessage = error[0].defaultMessage:
      error: (error) => {
        if(error.error && error.error.length > 0) {
          // Exibir a mensagem de erro retornada pelo backend 

          this.errorMessage = error[0].defaultMessage

        } else {

          this.errorMessage = 'Erro ao registrar o usuário. Tente novamente mais tarde!'
        }
      }
      
    })
  }


}
