// Routes: é o recurso usado para que o serviço de rotas do angular funcione corretamente
import { Routes } from '@angular/router';

// para que as rotas sejam estabelecidas, é necessário criar a "comunicação" deste arquivo com cada um dos componentes para os quais vamos criar as rotas
import { HomeComponent } from './componentes/home/home.component'; 
import { LoginComponent } from './componentes/login/login.component';// aqui, é estabelecida a "comunicação" entre o arquivo de rotas e o componente
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { NotesListComponent } from './componentes/notes-list/notes-list.component';
import { NotesFormComponent } from './componentes/notes-form/notes-form.component';
import { PerguntasComponent } from './componentes/perguntas/perguntas.component';
import { PravcComponent } from './componentes/pravc/pravc.component';
import { HeaderHomeComponent } from './componentes/header-home/header-home.component';
import { RecuperarSenhaComponent } from './componentes/recuperar-senha/recuperar-senha.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ContaInicialComponent } from './componentes/conta-inicial/conta-inicial.component';
import { TransferenciaComponent } from './componentes/transferencias/transferencia.component';
import { ExtratoComponent } from './componentes/extrato/extrato.component';
import { InvestimentosComponent } from './componentes/investimentos/investimentos.component';
import { CartoesComponent } from './componentes/cartoes/cartoes.component';
import { PagamentosComponent } from './componentes/pagamentos/pagamentos.component';
export const routes: Routes = [
    {path: 'home', component: HomeComponent}, 
    {path: 'login', component: LoginComponent}, 
    {path: 'conta', component: ContaInicialComponent},
    {path: 'transferencias', component: TransferenciaComponent}, 
    {path: 'extrato', component: ExtratoComponent}, 
    {path: 'investimentos', component: InvestimentosComponent}, 
    {path: 'cartoes', component: CartoesComponent},
    {path: 'pagamentos', component: PagamentosComponent},  
    /* acima
            a rota está sendo criada da seguinte forma
            path: determina o nome da rota, ou seja, qual é o valor que devemos colocar na url do browser

            Então, para acessar o componente login, a partir da aplicação, o endereço informado para o browser deve ser: http://localhost:4200/login
    */
    {path: 'header-home', component: HeaderHomeComponent},
   {path: 'cadastro', component: CadastroComponent},
   {path: 'recuperar-senha', component: RecuperarSenhaComponent}, 
   {path: 'perguntas', component: PerguntasComponent},
   {path: 'pravc', component: PravcComponent},
   {path: 'anotacoes/listar_anotacoes', component: NotesListComponent},
   {path: 'anotacoes/criar', component: NotesFormComponent},
   // http://localhost:4200/anotacoes/editar/2
   {path: 'anotacoes/editar/:id', component: NotesFormComponent},
   // na ausencia de uma rota especifica, estamos definindo uma rota-padrão, ou seja, sem rota especifica será renderizado, pelo browser, o componente que está relacionado a rota '/login' - componente LoginComponent; 

   // pathMatch: full: indica que, assim que o componente for renderizado na tela, o "endereço/rota" completa apareça na barra de endereço do browser
   {path: '', redirectTo: '/home', pathMatch: 'full'}
];



/*
acima
    export const routes: esta é uma constante que foi criada , de forma automatica, ao criar o projeto; seu proposito é receber como valor todas as "rotas/endereços" dos componentes criados no projeto - para que seja possivel estabelecer "navegação" entre eles; ela esta definida com o data type embarcado/nativo Angular Routes - com origem no recurso importado na 1ª linha do arquivo

    a const recebe como valor, inicialmente, um array vazio: []

    neste array indicaremos todas as rotas para os componentes

    a palavra reservada export "expõe" as rotas para qualquer outro "pedaço" do projeto
*/