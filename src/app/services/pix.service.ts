import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Pix } from '../models/pix';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class PixService {
  
    // 1º passo: definir a url-base para as requisições http
    private apiUrl = 'http://localhost:8080/api'
  
    // 2º passo: definir a injeção de dependencia - a partir da classe HttpClient
    constructor(private http: HttpClient) { } // agora, com interceptor

    // 5º passo: definir o método/tarefa assincrona que cria uma nova anotação e armazena na base
    createPix(pix: Pix): Observable<Pix>{
        return this.http.post<Pix>(`${this.apiUrl}/pix`, pix,{withCredentials: true})
        .pipe(
            catchError(this.handleError)
        )//@postmapping
    }

    // 3º passo: definir a requisição que obtem todas as anotações armazenadas na base
    getPix(): Observable<Pix[]>{
        return this.http.get<Pix[]>(`${this.apiUrl}/pix`,{withCredentials: true})
        .pipe(
          catchError(this.handleError)
        )//@getmapping
      }

    deletePix(id: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/pix/${id}`, {withCredentials: true})
        .pipe(
          catchError(this.handleError)
        )
      }

     //4º passo: definir o método/tarefa assincrona que obtem uma unica anotação por sua identificação
    getPixById(id: number): Observable<Pix>{
      return this.http.get<Pix>(`${this.apiUrl}/pix/${id}`, {withCredentials: true})
      .pipe(
        catchError(this.handleError)
      )
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