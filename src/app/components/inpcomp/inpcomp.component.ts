import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inpcomp',
  templateUrl: './inpcomp.component.html',
  styleUrls: ['./inpcomp.component.scss']
})
export class InpcompComponent {
  @Input() frase: string;
}
