import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  arr: string[] = [];

  logChildValue(data: string) {
    this.arr.push(data);
  }
}
