// OBJETIVO DESTE SERVICE: DISPONIBILIZAR AS CONSULTAS AO BACKEND PARA A MANIPULAÇÃO DAS ANOTAÇÕES QUE O USUARIO FIZER
// import dos recursos para as requisições http



/* http://localhost:8080/api/notes == endpoint geral
 * http://localhost:8080/api/notes/getNotes         => recupera todoas as notas
 * http://localhost:8080/api/notes/createNote       => cria uma anotação
 * http://localhost:8080/api/notes/getNote/{id}     => recupera uma anotação pelo id 
 * http://localhost:8080/api/notes/updateNote/{id} => atualiza um anaotação indetificda pelo id 
 * http://localhost:8080/api/notes/deleteNote/{id}  => exclui uma anotação pelo id
 * */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Conta } from '../models/conta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  // 1º passo: definir a url-base para as requisições http
  private apiUrl = 'http://localhost:8080/api'

  // 2º passo: definir a injeção de dependencia - a partir da classe HttpClient
  constructor(private http: HttpClient) { } // agora, com interceptor

    /*
  ========================================================================================
          AQUI, VAMOS DEFINIR AS REQUISIÇÕES AOS ENDPOINTS DAS APIs
  ========================================================================================
  */

// 5º passo: definir o método/tarefa assincrona que cria uma nova anotação e armazena na base
createConta(conta: Conta): Observable<Conta>{
    return this.http.post<Conta>(`${this.apiUrl}/api/Conta/criar`, conta,{withCredentials: true})
    .pipe(
        catchError(this.handleError)
    )
}
  

  // 3º passo: definir a requisição que obtem todas as anotações armazenadas na base
  getConta(): Observable<Conta[]>{
    return this.http.get<Conta[]>(`${this.apiUrl}/api/Conta/pegar`,{withCredentials: true})
    .pipe(
      catchError(this.handleError)
    )
  }

  /*
    catchError(): metodo que obtem qualquer erro que, eventualmente, possa ocorrer com a aplicação.
    handleError(): método que trata os erros que, eventualmente, possam ter ocorrido com a aplicação - será definido posteriormente.
  */

    /* 4º passo: definir o método/tarefa assincrona que obtem uma unica anotação por sua identificação
    getNoteById(id: number): Observable<Note>{
      return this.http.get<Note>(`${this.apiUrl}/notes/getNote/${id}`, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
    }*/


    // 6º passo: definir o método/tarefa assincrona que atualiza/altera uma anotação desde que esteja devidamente armazenada na base
    updateConta(id: number, conta: Conta): Observable<Conta>{
      return this.http.put<Conta>(`${this.apiUrl}/api/Conta/${id}`, conta, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
    }

    /* 7º passo: definir o método/tarefa assincrona que exclui uma anotação desde que esteja devidamente armazenada na base
    deleteNote(id: number): Observable<void>{
      return this.http.delete<void>(`${this.apiUrl}/notes/deleteNote/${id}`, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
    }*/

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
