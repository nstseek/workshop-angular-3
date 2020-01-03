import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  DoCheck,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent
  implements OnInit, AfterViewInit, OnDestroy, DoCheck {
  state = false;
  logs: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const msg = 'O componente está sendo inicializado';
    console.log(msg);
    this.logs.push(msg);
  }

  ngOnDestroy() {
    const msg = 'O componente será destruído';
    console.log(msg);
    this.logs.push(msg);
  }

  ngDoCheck() {
    const msg = 'Uma mudança no estado do componente ocorreu';
    console.log(msg);
    this.logs.push(msg);
  }

  ngAfterViewInit() {
    const msg = 'O componente foi totalmente inicializado';
    console.log(msg);
    this.logs.push(msg);
    // this.cdr.detectChanges(); // necessario para que o angular veja que o estado mudou no AfterViewInit - experimente remover essa linha
  }

  changeState() {
    this.state = !this.state;
  }
}
