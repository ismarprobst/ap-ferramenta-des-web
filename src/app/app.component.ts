import { Component } from '@angular/core';
import { alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atividade Prática de Des. Web';
  lista_alunos = alunos; // aqui importamos a partir do arquivo alunos.ts os dados da lista, isso sera usado no html do Angular
}
