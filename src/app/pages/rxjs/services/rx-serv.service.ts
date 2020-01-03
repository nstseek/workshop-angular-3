import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { del } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class RxServService {
  observable1 = new Observable<string>();
  observable2 = new Observable<string>();

  constructor() { }

  get1() {
    return this.observable1;
  }

  send1(delayVal: number) {
    pipe(delay(delayVal));
  }

  get2() {
    return this.observable2;
  }
}
