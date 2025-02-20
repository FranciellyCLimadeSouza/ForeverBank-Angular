import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

/*
 ApplicationConfig: é uma interface que define a configuração inicial da aplicação

 provideZoneChangeDetection: é uma função/metodo que configura o Angular para detectar alterações regionais utilizando o recurso Zone - um mecanismo usado pelo angular para rastrear qualquer alteração qeu ocorra - com o projeto . 
*/
import { provideRouter } from '@angular/router';

/*
  provideRouter: é uma função que proporciona ao Angular estabelecer a navegação entre componentes - a partir do arquivo de rotas disponivel no projeto - e devidamente configurado;
*/

import { routes } from './app.routes';
/*
  routes: é a constante de rotas que configuramos no arquivo app.routes.ts
*/

import { provideClientHydration } from '@angular/platform-browser';
/*
  provideClientHydration: é uma função que habilita, para o projeto Angular, o processo de "hidratação da aplicação"; siginifica que: o angular "pega" o HTML renderizado - frontend - e , no lado do servidor, converte este HTML - do front - num aplicação dinamica para as funcionalidades descritas nos componentes "fazerem uso" dos elemento dinamicos, neles, implementados 
*/

// inserir um novo recurso

import { provideHttpClient } from '@angular/common/http';
// provideHttpClient: é uma função que auxiliará na construção das requisições http que serão feitas para o bakend
import { authInterceptor } from './interception/auth.interceptor';

// appConfing: é um objeto literal
export const appConfig: ApplicationConfig = {
  // providers: []: é o array que registra provedores de conteudo e funcionalidade para os projetos angular e todos os seus conponentes
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideClientHydration(),
    // aqui, estamos registrando a função provideHttpClient como um recurso que pode ser acessado de qualquer "pedaço " do projeto'
    provideHttpClient()
  ]
};
