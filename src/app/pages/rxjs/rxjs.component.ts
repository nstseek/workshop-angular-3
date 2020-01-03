import { Component, OnInit } from '@angular/core';
import { RxServService } from './services/rx-serv.service';
import { forkJoin, merge } from 'rxjs';

const now = Date.now();

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  obs1: string = null;
  obs2: string = null;
  obs3: string = null;
  merge: string[] = [];
  forkJoin: string[] = [];

  constructor(private service: RxServService) {}

  ngOnInit() {
    this.service.observable1.subscribe(this.saveNext('obs1'));
    this.service.observable2.subscribe(this.saveNext('obs2'));
    this.service.observable3.subscribe(this.saveNext('obs3'));
    forkJoin(this.service.observable1, this.service.observable2, this.service.observable3).subscribe(
      this.saveNext('forkJoin', true)
    );
    merge(this.service.observable1, this.service.observable2, this.service.observable3).subscribe(
      this.saveNext('merge', true)
    );
  }

  saveNext = (key: string, arr = false) => (data: number | number[]) => {
    const str = `${data} | ${Date.now() - now}ms`;
    arr ? this[key].push(str) : (this[key] = str);
  };
}
