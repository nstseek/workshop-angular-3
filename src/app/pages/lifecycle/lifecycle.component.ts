import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  OnDestroy,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent
  implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  state = false;

  constructor() {}

  ngOnInit() {
    console.log('O componente está sendo inicializado');
  }

  ngOnDestroy() {
    console.log('O componente será destruído');
  }

  ngDoCheck() {
    console.log('Uma mudança no estado do componente ocorreu');
  }

  ngAfterViewInit() {
    console.log('O componente foi totalmente inicializado');
  }

  changeState() {
    this.state = !this.state;
  }
}
