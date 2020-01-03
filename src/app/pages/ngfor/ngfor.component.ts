import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent {
  arr: number[] = [];

  pushNumber(value: number) {
    if (value) {
      this.arr.push(value);
    }
  }
}
