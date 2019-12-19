import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-outcomp',
  templateUrl: './outcomp.component.html',
  styleUrls: ['./outcomp.component.scss']
})
export class OutcompComponent {

  @Output() emitter = new EventEmitter();
  campo = new FormControl(null);

  constructor() { }

  emit() {
    this.emitter.emit(this.campo.value);
  }

}
