// OnInit é uma interface do TS/Angular que auxilia no gerenciamento do ciclo de vida de um componente

// significa que: ao carregar um componente na tela, é possível indicar qual é a prioridade de algum conteúdo que deva ser exibido, na tela, assim que o componente for carregado. 

import { Component, OnInit } from '@angular/core';
// Datepipe é o recurso necessário para aplicar a dados de data/hora uma transformação

// NgClass: Diretiva de estilo angular que tem como propósito principal auxiliar e aplicar em determinados pedaços da view algum estilo customizado.
import { CommonModule, DatePipe, NgClass} from '@angular/common';
import { ContaService } from '../../services/conta.service';
import { AutenticacaoService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Conta } from '../../models/conta';
import { from } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, DatePipe, NgClass, RouterLink],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent implements OnInit {


  // Passo 0: DEFINIR O TÍTULO DO COMPONENTE
tituloComp: string = 'Listar Anotações'

  // 1º Passo: definir 3 props, a 1ª receberá como valor um array vazio para armazenar as anotações; a 2ª receberá, inicialmente, um valor nulo pois deve ser atribuída quando o usuário acessar, esta área restrita, o valor do e-mail para o usuário. A 3ª receberá um valor booleano.

  // 1ª:
  contas: Conta[] = []

  // 2ª:

  userEmail: string | null = null

  // 3ª:

  isLoggedIn: boolean = false

  // 2º Passo: definir o construtor e as DIs.

  constructor (
    private contaService: ContaService,
    private authService: AutenticacaoService,
    private router: Router

  ) {}

  // implementar o método ngOnInit() - com origem na interface OnInit - para priorizar o carregamento de algum conteúdo/funcionalidade para este componente

  ngOnInit(): void {
    // chamar à execução dois métodos
    this.loadNotes() // carregar para este componente as anotações armazenadas na base
    this.checkAuthentication() // Verificar se o usuário atual está autenticado para acessar esta área restrita
  }

  // 4º passo: implementar o método que carregará todas as notas para este componente

  loadNotes(): void {
    this.contaService.getConta().subscribe({
      next: (response) => {
        this.contas = response // aqui, atribuímos os dados recuperados da base para o array notes 
      },
      error: (error) => {
        console.error('Erro ao carregar as contas.', error)
      }
    })
  }













  // método para verificar se o usuário e, qual o usuário está logado

  checkAuthentication(): void {
    this.isLoggedIn = this.authService.isLoggedIn() // Verificando se o usuário existe

    if(this.isLoggedIn) {
      this.authService.getCurrentUsuarioEmail().subscribe({
        next: (response) => {
          this.userEmail = response.email // aqui, obtivemos o valor do email do usuário
        },
        error: (error) => {
          console.error('Erro de obter o email do usuário.', error)
        }
      })
    }
  }

}
