// recurso que da a possibilidade de usar o decorator @Injectable
import { Injectable } from '@angular/core';

// fazer os imports necessarios
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http'; // classe qua vai auxiliar na construção das requisições http feitas para o backend
import { Observable, tap, catchError, throwError} from 'rxjs'; // bibliotecas usada para operar com a assincronicidade necessaria para o funcionamento das requisições e repostas http
// Observable: representa o fluxo de dados assincrono do projeto - na camada lógica
// tap: operador que permite executar ações secundárias sem modifica o fluxo principal

import { Investimento  } from '../models/investimento'; // importação do model USer

// o uso deste decorator permite que esta classe, se necesasrio for, possa ser "injetada" por outra classe
// ou seja, o uso do INjectable diz que esta classe é passivel de receber uma injeção de dependencia
// @Component - decorator que definie cada componente do projeto é "filho" do decorator @Injectable
@Injectable({
  providedIn: 'root' // esta expressão lógica indica o seguinte: que o service será disponibilizado no nivel "raiz/root" da aplicação(singleton), ou seja, uma única instancia será compartilhada em toda a aplicação
  //singleton: nada mais é do que uma instancia unica de uma classe qualquer  
})


export class InvestimentoService {

  // 1º passo: definir a url-base para a integração do front-end com o backend
  // aqui é importante indicar em qual "endereço" o backend está "rodando"

  // exemplo: queremosinseri um registro no banco de dados. Como pode ser feito?
  // no backend, o endpoint é o seguinte: '/users/register'
  // http://localhost:8080/api/users/register
  private apiUrl = 'http://localhost:8080/api' 

  // 2º passo: definir no construtor a injeção de dependencia da classe HttpClient. Por que? R.: Porque é a partir do uso desta injeção de dependencia é que serão realizadas a requisções http para as APIs do backend: 'http://localhost:8080/api'
  // o service depende deste recurso para fazer as requisições http
  constructor(private http: HttpClient) { } // a var http é a injeção de dependencia gerada da classe HttpClient; esta var será conhecida por nós como um objeto referencial

    createInvestimento(investimento: Investimento): Observable<Investimento>{
        return this.http.post<Investimento>(`${this.apiUrl}/investimento`, investimento,{withCredentials: true})
        .pipe(
            catchError(this.handleError)
        )//@postmapping
    }

    getInvestimento(): Observable<Investimento[]>{
        return this.http.get<Investimento[]>(`${this.apiUrl}/investimento`,{withCredentials: true})
        .pipe(
          catchError(this.handleError)
        )//@getmapping
      }

    updateInvestimento(id: number, investimento: Investimento): Observable<Investimento>{
          return this.http.put<Investimento>(`${this.apiUrl}/investimento${id}`, investimento, {withCredentials: true})
          .pipe(
            catchError(this.handleError)
          )//@putmapping
        }

    // função de tratamento de erros
    private handleError(error: HttpErrorResponse){
        // definir uma var para receber como valor uma string padrão
        let errorMessage = 'Erro desconhecido'
  
        // verificar em que "pedaço" da aplicação o erro ocorre- se no front ou no backend
        if(error.error instanceof ErrorEvent){
          // instanceof é o operador do js que dá a possibilidade de verificar se existe algum objeto gerado a partir de alguma classe
          // fazendo deste operador, estamos verificando se existe algum objeto gerado a partir de ErrorEvent; caso o operador retorne TRUE significa que um objeto gerado de ErrorEvent. Se isso foi, realmente, verificado o erro ocorreu no FRONTEND
          errorMessage = `Erro: ${error.error.message}`
        }else{
          // caso contrario - se naão existir uma instancia de ErrorEvent - significa que o erro é no backend
          errorMessage = `Codigo do erro: ${error.status}, Mensagem: ${error.message}`
  
          // definir um novo if() para obter detalhes do erro
          if(error.error && error.error.message){
            errorMessage = errorMessage + ` | Detalhes: ${error.error.message}`
          }
        }
  
        // fazer da função auxiliar log() para observar o comportamento da var errorMessage via terminal do browser
        console.log(errorMessage)
  
        // definir a expressão de retorno da função/metodo
        return throwError(() => new Error(errorMessage))
  
      }
}