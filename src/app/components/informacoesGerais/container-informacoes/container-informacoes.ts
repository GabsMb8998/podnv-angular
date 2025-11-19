import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-informacoes',
  imports: [],
  templateUrl: './container-informacoes.html',
  styleUrl: './container-informacoes.css',
})
export class ContainerInformacoes {
  @Input() label: string = ''
  @Input() valor: string = ''
}
