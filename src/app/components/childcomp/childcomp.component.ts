import { Component } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.scss']
})
export class ChildcompComponent {
  propriedade = 'Esse componente possui uma propriedade interna de sua classe';
}
